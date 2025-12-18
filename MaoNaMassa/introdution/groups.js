// Groups - São uma forma de organizar scripts.
// O que é uma transação?

//Ex:
import http from 'k6/http';
import { check, group } from 'k6';

export const options = {
    vus: 4, 
    duration: '5s',
    thresholds: {
        'http_req_duration{group:Crocodiles List All}': ['p(95) < 500'],
    },
}

export default function() {
    group('Crocodiles List All', function() {
        const response1 = http.get('https://test-api.k6.io/public/crocodiles/');
        check(response1, {
            'status is 200': (r) => r.status === 200,
        });
    });

    group('Crocodiles List by ID', function() {
        const response2 = http.get('https://test-api.k6.io/public/crocodiles/1/');
        check(response2, {
            'status is 200 by ID': (r) => r.status === 200,
        });
    });
}