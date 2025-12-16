// inicialização
import sleep from 'k6'

// configuração
export const options = { 
    vus: 1,
    duration: '10s'
}

// execução // codigo VU

export default function() { 
    console.log('Hello World');
    sleep(1);
}

// desmontagem

export default function teardown(data) {
    console.log(data);
}