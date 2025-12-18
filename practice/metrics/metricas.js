import http from 'k6/http';
import { Counter, Rate, Trend, Gauge } from 'k6/metrics';

export const options = {
    vus: 1,
    duration: '3s',
}

const myCounter = new Counter('my_counter');
const myGauge = new Gauge('my_gauge');
const myRate = new Rate('my_rate');
const myTrend = new Trend('my_trend');

export default function() { 
    const res = http.get('https://test.k6.io');

    //Contadores
    myCounter.add(1);
    //Medidores
    myGauge.add(res.timings.blocked);
    //Taxas
    myRate.add(res.status === 200);
    //Tendências
    myTrend.add(res.timings.waiting);
}