<Performance Testing(Load Testing)> 

01. Quantidade de tráfego.
02. Condições normais e de pico.
03. Garantir funcionamento. 

Ex:

- Carga constante
export const options1 = {
    vus: 100, 
    duration: '20m',
};

- Carga Variável
export const options2 = {
    stage: [
        { duration: '5m', target: 100 },
        { duration: '10m', target: 100 },
        { duration: '5m', target: 0 },
    ]
};

Quais os benefícios? 
- Permite que seu sistema aqueça ou redimensione automaticamente para lidar com o tráfego.
- Permite que você compare o tempo de resposta entre os estágios de carga baixa(Carga Inicial) e carga nominal(Carga Constante).