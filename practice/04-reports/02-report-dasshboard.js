import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1,
  duration: '60s',
  thresholds: {
    checks: ['rate > 0.99'],
    },  
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');

    check(res, {
        'status is 200': (r) => r.status === 200
    });
}

// K6_WEB_DASHBOARD=true k6 run script.js or K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js

// localhost:5665