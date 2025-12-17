// Publick API: Exemplo 4:
// Registro e Auth: Registro - Realizar o registro de um novo usuário.

// - Critérios:
// Stress test - Ramp up 5 VU em 5s, Carga 5 VU por 5s, Ramp up 50 VU em 2s, Carga 50 VU em 2s, Ramp down 0 VU em 5s.
// Limites - Requisição com falha inferior a 1%.

import http from 'k6/http';
import { check, sleep } from 'k6';
import { SharedArray } from 'k6/data';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

export const options = {
    stages: [
        { duration: '5s', target: 15 },
        { duration: '5s', target: 15 },
        { duration: '2s', target: 50 },
        { duration: '2s', target: 50 },
        { duration: '5s', target: 0 },
    ],
    thresholds: {
        http_req_failed: ['rate < 0.01'],
    },
};

const csv_data = new SharedArray('Ler dados', function () {
    return papaparse.parse(open('./user.csv'), { header: true }).data;
});

export default function () {
    const BASE_URL = 'https://test-api.k6.io';
    const USER = csv_data[Math.floor(Math.random() * csv_data.length)].user;
    const PASS = csv_data[Math.floor(Math.random() * csv_data.length)].password;

    console.log(USER);

    const res = http.post(`${BASE_URL}/auth/token/login/`, {
        username: USER,
        password: PASS,
    });  

    check(res, {
        'Login successful': (r) => r.status === 200,
        'Has auth token': (r) => r.json('access') !== '',
    });

    sleep(1);
}; 