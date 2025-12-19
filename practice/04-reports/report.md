### Report com K6

O k6 oferece várias opções para gerar relatórios detalhados sobre os testes de carga realizados. Esses relatórios ajudam a analisar o desempenho da aplicação testada, identificar gargalos e monitorar métricas importantes.

#### Opções de Relatórios

1. **Relatório HTML**

   O k6 pode gerar relatórios em formato HTML que fornecem uma visão geral visual do desempenho da aplicação. Esses relatórios incluem gráficos e tabelas que mostram métricas como tempo de resposta, taxa de erros, número de requisições, entre outros.

   Para gerar um relatório HTML, você pode usar a opção `--out` ao executar o script k6:

   ```bash
   k6 run --out html=report.html script.js
   ```

2.  **Dashboard:**

    O k6 também pode enviar métricas para um dashboard em tempo real, como o Grafana, permitindo monitorar o desempenho da aplicação durante a execução do teste. Isso é especialmente útil para testes de longa duração ou quando se deseja observar o comportamento da aplicação sob carga em tempo real.
    
    Para configurar o envio de métricas para um dashboard, você pode usar a opção `--out` com o destino apropriado:
    
    ```bash
    k6 run --out influxdb=http://localhost:8086/k6 script.js
    ```


