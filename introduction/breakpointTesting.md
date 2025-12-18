<Breakpoint Testing>

Objetivo: 
Limites do seu sistema.

1. Ajustar/Cuidar de potos fracos do sistema, buscando limites maiores suportados pelo sistema.
2. Ajudar a planejar e verificar a correção de sistema com baixo limite de utilização.

Quando executar?
1. Após mudanças significativas na base de código/infraestrtura.
2. Consumo elevado de recursos pelo seu sistema.
3. Carga do sistema cresce continuamente ?

Considerações antes de realizar o teste:
1. Atenção a elasticidade de ambientes de nuvem. ( A medição é do sistema e não da infraestrutura. )
2. Aumento de carga gradual para essa modalidade. 
3. Tipo de teste de ciclo iterativo.
4. Interrupção manual ou automática. 

Seu sistema foi aprovado nos demais tipos de teste?
Não faz sentido aplicarmos o breakpoint testing se o smoke testing, stress testing não estão funcionais. 

Ex: 

export const options = {
    executor: 'ramping-arrival-rate',
    stages: [
        { duration: '2h', target: 20000 }, 
    ],
}; 

export default () => {
    const urlRest = http.get('https://test-api.k6.io');
    sleep(1);
};