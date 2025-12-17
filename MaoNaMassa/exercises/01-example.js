// Publick API: Exemplo 1:
// Buscar todos os crocodilos.

// - Critérios:
// Smoke test - 1 usuário por 30 segundos
// Limite - Requisição com sucesso > 99%

import http from 'k6/http';
import { check } from 'k6';

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