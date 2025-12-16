// Cenários
// 1. Organização dos testes.
// 2. Simulação mais realistas.
// 3. Cargas de trabalho paralelas ou sequenciais.
// 4. Análise granular dos resultados.

// Options disponíveis.
// executor, starTime, gradefullstop, exec, env, tags.

// Os executores disponiveis no K6 são agrupados em três grupos: 

// Por numero de iterações
// 1. shared-iterations - Um número fixo de VUs completa um número fixo de interações. 
// 2. per-vu-iterations - Cada VU executa um número exato de iterações. VU x Iterações. 

// Por numero número de VUs
// 1. constant-vus - Um número fixo de VUs é mantido por um período de tempo. 
// 2. ramping-vus - O número de VUs é aumentado ou diminuído ao longo do tempo, conforme definido em uma série de etapas.

// Por taxa de iteração
// constant-arrival-rate - Um número fixo de iterações por segundo é mantido por um período de tempo.
// ramping-arrival-rate - O número de iterações por segundo é aumentado ou diminuído ao longo do tempo, conforme definido em uma série de etapas.

