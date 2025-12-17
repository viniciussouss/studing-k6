// Publick API: Exemplo 3:
// Registro e Auth: Registro - Realizar o registro de um novo usuário.

// - Critérios:
// Performance test - carga 10 VU por 10s.
// Limites - Requisição com falha inferior a 1%, Duração da requisição p(95) < 500ms, Requisição com sucesso superior a 95%.

import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 10 },
    ],
    thresholds: {
        http_req_failed: ['rate < 0.01'],
        http_req_duration: ['p(95) < 500'],
        checks: ['rate > 0.95'],
    },
};

export default function () {
    const BASE_URL = 'https://test-api.k6.io';
    const USER = `${Math.random()}@email.com`;
    const PASS = 'user123'

    console.log(`Registering user: ${USER} / ${PASS}`);

    const res = http.post(`${BASE_URL}/user/register/`, {
        username: USER,
        first_name: 'Cocodile',
        last_name: 'K6',
        email: USER,
        password: PASS,
    });  

    check(res, {
        'Created user sucess': (r) => r.status === 201,
    });

    sleep(1);
}; 