### Entendendo Métricas

Métricas são medições que o k6 recolhe durante a execução de um teste (latências, contagens, taxas, etc.) e que permitem analisar o comportamento da aplicação sob carga.

**Métricas built‑in:**

> **http_reqs:** número de requisições HTTP.

> **http_req_duration:** tempo de resposta das requisições (ms).

> **http_req_failed / checks:** taxas de falha e sucesso.

> **vus / vus_max:** usuários virtuais ativos.    

**Métricas customizadas (API):**

> **Counter:**  contador crescente (ex.: erros, eventos).

> **Gauge:** valor que pode subir/descer (ex.: uso de memória).

> **Trend:** séries de valores para estatísticas (min/avg/max/pX).

> **Rate:** taxa (true/false) útil para checks.

### **`Toque do mestre:`**

- Defina thresholds úteis (p(95), p(99)).
- Evite criar métricas desnecessárias para não inflar o payload.
- Use tags para análises granulares.
- Colete Trends para latências e Counters para contagens de erros.