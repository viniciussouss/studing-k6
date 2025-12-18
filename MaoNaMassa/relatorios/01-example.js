import http from 'k6/http';
import { check } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/latest/dist/bundle.js'

export const options = {
  vus: 1,
  duration: '30s',
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

export function handleSummary(data) {
    return {
        "./MaoNaMassa/relatorios/01-example.html": htmlReport(data),
    };
}; 

