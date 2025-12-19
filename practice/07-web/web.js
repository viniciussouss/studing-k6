import { browser } from 'k6/browser';
import { check } from 'k6';

export const options = {
    scenarios: {
        ui: {
            executor: 'constant-vus',
            vus: 3,
            duration: '10s',
            options: { 
                browser: { 
                    type: 'chromium',
                },
            },
        },
    },
    thresholds: {
        checks: ['rate == 1.0'],
        browser_web_vital_fid: ['p(75) <= 100'], 
        browser_web_vital_lcp: ['p(75) <= 2500'], // Largest Contentful Paint should be less than 2500ms for 95% of requests
    },
    sumaryTrendStats: ['min', 'med', 'avg', 'max', 'p(75)', 'p(95)', 'p(99)']
};

export default async function () {

    const context = await browser.newContext();
    const page = await context.newPage();
    
    try {
        await page.goto('https://test.k6.io/my_messages.php');

        await page.locator('input[name="login"]').fill('admin');
        await page.locator('input[name="password"]').fill('123');

        const submitButton = page.locator('input[type="submit"]');

        await Promise.all([
            submitButton.click(),
            page.waitForNavigation(),
        ]);

        const h2 = page.locator('h2');
        const headerText = await h2.textContent() == 'Welcome, admin!';
        check(headerText, {
            'header text is correct': headerText,
        });

        const logoutButton = page.locator('input[type="submit"][value="Logout"]');
        
        await Promise.all([
            logoutButton.click(),
            page.waitForNavigation(),
        ]);

        const h2AfterLogout = page.locator('h2');
        const headerTextAfterLogout = await h2AfterLogout.textContent() == 'Login';
        check(headerTextAfterLogout, {
            'logout header text is correct': headerTextAfterLogout,
        });
    } finally {
        await page.close();   
    }

}

//Métricas importantes: 
// browser_web_vitals_cls - Cumulative Layout Shift
// browser_web_vitals_lcp - Largest Contentful Paint
// browser_web_vitals_fid - First Input Delay