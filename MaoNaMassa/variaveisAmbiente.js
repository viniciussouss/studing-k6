// Finalidades
// 1. Fornecer uma variável de ambiente para o script
// 2. Realizar configurações do escopo de options.

// DOCS: https://grafana.com/docs/k6/latest/using-k6/k6-options/reference/
//EX:
import http from 'k6/http';
import { sleep } from 'k6';

export const options =  {
    vus: 2, 
    duration: '5s'
}

export default function() {
    const base_url = __ENV.URL; 

    const res = http.get(base_url)

    sleep(1)
}