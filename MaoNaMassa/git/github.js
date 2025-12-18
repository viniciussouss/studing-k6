// 1. Execução com github actions.
// 2. Geração de artefatos de saídas.
// 3. Publicação de artefatos.

import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 100,
  duration: '1m',
  thresholds: {
    http_req_failed: ['rate < 0.05'],
  },
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');

    check(res, {
        'status is 200': (r) => r.status === 200
    });
}