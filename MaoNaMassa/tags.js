// Tags
// São uma forma de organizar scripts.
// 1. Requests
// 2. Checks
// 3. Thresholds
// 4. Métricas Customizadas
// 5. Todas as métricas de um teste
//OBS: Tags podem ser utilizadas juntas dos groups.

//DOC: https://grafana.com/docs/k6/latest/using-k6/tags-and-groups/

//Ex:
import http from 'k6/http';
import { check, group } from 'k6';

export const options = {
    vus: 4, 
    duration: '5s',
    thresholds: {
        'http_req_duration{group:Crocodiles List All}': ['p(95) < 500'],
        'http_req_duration{tipo: List by ID}': ['p(95) < 500']
    },
    tags: {
        tipo: 'Crocodiles',
    },
}

export default function() {
    group('Crocodiles List All', function() {
        const response1 = http.get('https://test-api.k6.io/public/crocodiles/', { tags: { tipo: 'List All' } });
        check(response1, {
            'status is 200': (r) => r.status === 200,
        });
    });

    group('Crocodiles List by ID', function() {
        const response2 = http.get('https://test-api.k6.io/public/crocodiles/1/', { tags: { tipo: 'List by ID' } });
        check(response2, {
            'status is 200 by ID': (r) => r.status === 200,
        });
    });
}