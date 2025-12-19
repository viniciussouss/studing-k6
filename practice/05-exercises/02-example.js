// Publick API: Exemplo 2:
// Buscar crocodilo por id.

// - Critérios:
// Performance test - Ramp up 10 em 10s, Carga 10VU por 10s, Ramp down 0 VU em 10s.
// Limites - Requisição com sucesso > 95%, Tempo de requisição p(90) < 200ms

import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';
import { SharedArray } from 'k6/data';

export const options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 0 },
    ],
    thresholds: {
        checks: ['rate > 0.95'],
        http_req_duration: ['p(90) < 200'],
    },
};

const data = new SharedArray('crocodile ids', function () {
    return JSON.parse(open('./dados.json')).crocodiles;
});

export default function () {

    const crocodile = data[Math.floor(Math.random() * data.length)].id;
    console.log(`Crocodile ID: ${crocodile}`);

    const res = http.get(`https://test-api.k6.io/public/crocodiles/${crocodile}/`);

    check(res, {
        'status is 200': (r) => r.status === 200
    });

    sleep(1);
}
