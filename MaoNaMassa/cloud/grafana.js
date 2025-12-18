// Grafana Cloud K6

// 1. Escalabilidade;
// 2. Flexibilidade geográfica;
// 3. Confiança nos resultados;

// Config: K6 Cloud Grafana - "K6 login cloud --token <your_token>"
// Run > k6 run --out cloud MaoNaMassa/cloud/grafana.js

import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_duration: ['p(95) < 200'],
    },
    cloud: {
        loadimpact: {
            projectID: 6147119,
            name: 'POC K6'
        }
    }
};

export default function () {

    const res = http.get(`https://test-api.k6.io/public/crocodiles/`);

    check(res, {
        'status is 200': (r) => r.status === 200
    });

    sleep(1);
}