// Publick API: Exemplo 5:

// - Critérios:
// Realizar consulta a API de listagem de crocodilos e busca por ID de crocodilos.
// É esperado um RPS de 200 REQ/S para a API de listagem de crocodilos durante 30segundos.
// Para busca por id, o sistema deve atender 50 usuários onde cada usuário realiza até 20 solicitações em até 1 min.
    // Usuários par devem realizar busca ao crocodilo de ID 2.
    // Usuários ímpar devem realizar busca ao crocodilo de ID 1.
// Ambos os testes devem ser executados simultaneamente.

import http from 'k6/http'; 

export const options = {
    scenarios: {    
      listar : {
        executor: 'constant-arrival-rate',
        exec: 'listar',
        duration: '30s',
        rate: 200,
        timeUnit: '1s',
        preAllocatedVUs: 150,
        gracefulStop: '10s',
        tags: { test_type: 'listar_crocodilos' },
      }, 
        buscarPorId: {
          executor: 'per-vu-iterations',
          exec: 'buscarPorId',
          vus: 50,
          iterations: 20,
          maxDuration: '1m',
          tags: { test_type: 'buscar_crocodilo_por_id' },
        }
    }
};

const BASE_URL = 'https://test-api.k6.io/public';

export function listar () {

    http.get(`${BASE_URL}/crocodiles/`);

}; 

export function buscarPorId () {

    if(__VU % 2 === 0) {
        http.get(`${BASE_URL}/crocodiles/2/`);
        return;
    }else {
        http.get(`${BASE_URL}/crocodiles/1/`);
        return;
    }
};