<Stress Testing>

Como o sistema se comporta sobre alta carga?

1. Como o seu sistema se comporta em condições extremas?
2. Qual é a capacidade máxima do seu sistema em termos de usuários ou taxa de transferência?
3. O ponto de ruptura do seu sistema?**
4. O sistema se recupera sem intervenção manual após o término do teste de estresse?**

Validar arquitetura de uma aplicação.

Ex:

export const options = {
    stages: [
        { duration: '2m', target: 100 },  
        { duration: '5m', target: 100 }, 
        { duration: '2m', target: 200 }, 
        { duration: '5m', target: 200 }, 
        { duration: '2m', target: 300 }, 
        { duration: '5m', target: 300 }, 
        { duration: '2m', target: 400 }, 
        { duration: '5m', target: 400 }, 
        { duration: '10m', target: 0 }, 
    ],
};

1. A rapidez com que os mecanismos de dimensionamento automático reagem ao aumento de carga.
2. Se houver alguma falha durante os eventos de dimensionamento.

<Spike Testing>

1. Como seu sistema funcioná sob um auemtno repentino de tráfego?
2. O seu sistema irá se recuperar assim que o tráfego diminuir?

Resultado pós teste:

01. Excelente. ( Não há degradação, tempo de resposta semelhante no tráfego alto e baixo. )
02. Bom. ( O tempo de resposta é mais lento no tráfego alto, porém, o sistema não apresenta erro e todos os acessos são realizados com sucesso mesmo com a lentidão. )
03. Insatisfatório. ( Produção de erro devido ao aumento de tráfegos, mas quando a carga diminui o sistema volta a atender normalmente os usuários. )
04. Ruim. ( O sistema trava e não consegue se recuperar. )

export const options = {
    stages: [
        { duration: '10s', target: 100 },  
        { duration: '1m', target: 100 }, 
        { duration: '10s', target: 1400 }, 
        { duration: '3m', target: 1400 }, 
        { duration: '10s', target: 100 }, 
        { duration: '3m', target: 100 }, 
        { duration: '10s', target: 0 }, 
    ],
};