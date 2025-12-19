## Introdução

### Ciclo de vida

O ciclo de vida de um teste k6 é composto por várias fases que definem como o teste é configurado, executado e finalizado. As principais fases do ciclo de vida incluem:

1. **Setup (Configuração)**: Nesta fase, você pode definir variáveis globais, configurar conexões com bancos de dados ou serviços externos, e preparar qualquer dado necessário para o teste.

2. **Init (Inicialização)**: Esta fase é executada uma vez por VU (Virtual User) antes do início das iterações. Aqui, você pode inicializar variáveis específicas do VU ou configurar o ambiente de teste.

3. **VU Iteration (Iteração do VU)**: Esta é a fase principal onde o código do teste é executado repetidamente por cada VU. Cada iteração representa uma simulação de um usuário realizando ações no sistema sob teste.

4. **Teardown (Desmontagem)**: Após todas as iterações serem concluídas, esta fase é executada para limpar recursos, fechar conexões e realizar qualquer ação final necessária.

### Requisições HTTPS

O k6 suporta requisições HTTPS para testar a performance de aplicações web seguras. Você pode fazer requisições HTTPS usando o módulo `http` do k6, que permite enviar solicitações GET, POST, PUT, DELETE, entre outras.

### Módulos

O k6 permite a utilização de módulos para organizar e reutilizar código. Você pode importar módulos padrão do k6, bem como criar seus próprios módulos personalizados para encapsular funcionalidades específicas.

### Tags

As tags no k6 são usadas para categorizar e filtrar métricas. Você pode adicionar tags às suas requisições e outras operações para facilitar a análise dos resultados do teste.

### Thresholds

Os thresholds no k6 são limites definidos para métricas específicas que ajudam a determinar se um teste foi bem-sucedido ou falhou. Se uma métrica ultrapassar o threshold definido, o teste pode ser marcado como falho.

### Groups

Os grupos no k6 são usados para organizar o código do teste em seções lógicas. Eles ajudam a estruturar o script, facilitando a leitura e a manutenção. Cada grupo pode representar uma funcionalidade ou fluxo específico do sistema sob teste.

### Variáveis de Ambiente

As variáveis de ambiente no k6 permitem configurar o comportamento do teste sem modificar o código-fonte. Você pode definir variáveis de ambiente para controlar parâmetros como URLs, credenciais, e outras configurações que podem variar entre diferentes ambientes de teste.
