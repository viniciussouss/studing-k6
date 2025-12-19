## Scenarios no k6

Os scenarios no k6 permitem modelar testes de carga de forma flexível e realista, possibilitando a execução de múltiplos fluxos de teste dentro do mesmo script.

### Objetivos dos Scenarios

Os cenários são utilizados para:

**Organização dos testes:** 
Permitem separar fluxos distintos (ex.: login, compra, consulta) em cenários independentes.

**Simulações mais realistas:** 
Possibilitam representar comportamentos reais de usuários com diferentes padrões de carga.

**Cargas de trabalho paralelas ou sequenciais:** 
É possível executar cenários simultaneamente ou em momentos distintos.

**Análise granular dos resultados:**
Cada cenário pode ter métricas, tags e thresholds específicos, facilitando a análise.

### Opções Disponíveis em Scenarios

Cada cenário pode ser configurado com as seguintes opções:

- **Executor:** Define o tipo de executor utilizado.

- **StartTime:** Define quando o cenário inicia em relação ao início do teste.

- **GracefulStop:** Tempo para finalizar iterações em andamento após o término.

- **Exec:** Função JavaScript que será executada pelo cenário.

- **Env:** — Variáveis de ambiente específicas do cenário.

- **Tags:** — Tags aplicadas às métricas geradas pelo cenário.

### Tipos de Executors no k6

Os executores do k6 são agrupados em três categorias principais, de acordo com a forma como a carga é gerada.

1. Executores Baseados em Número de Iterações

    > Indicados quando o foco é quantidade total de execuções.

    - Shared-iterations

        > Um número fixo de VUs compartilha um número total de iterações.

        > As iterações são distribuídas dinamicamente entre os VUs.

        > **Uso típico:**
        Testes funcionais sob carga ou validações de volume total.

    - Per-vu-iterations

        > Cada VU executa um número exato de iterações.

        > O total de iterações é calculado como: VUs × Iterações.

        > **Uso típico:** Quando é necessário garantir que cada VU execute o mesmo volume de trabalho.


2. Executors Baseados em Número de VUs

    > Indicados quando o foco é a concorrência de usuários.

    - Constant-vus

        > Mantém um número fixo de VUs durante um período de tempo definido.

        > **Uso típico:** Testes de carga estável e definição de baseline de performance.

    - Ramping-vus
        >  Aumenta ou diminui o número de VUs ao longo do tempo, conforme uma série de etapas configuradas.

        > **Uso típico:** Testes de stress, ramp-up e ramp-down.

3. Executors Baseados em Taxa de Iterações

    > Indicados quando o foco é throughput (iterações por segundo).

    - Constant-arrival-rate

        > Mantém uma taxa fixa de iterações por segundo durante um período definido.

        > A taxa é mantida independentemente do tempo de resposta da aplicação.

        > **Uso típico:** Simulação de tráfego constante.

    - Ramping-arrival-rate

        > Aumenta ou diminui a taxa de iterações por segundo ao longo do tempo, conforme etapas definidas.

        > **Uso típico:** Testes de stress progressivo e identificação de gargalos.