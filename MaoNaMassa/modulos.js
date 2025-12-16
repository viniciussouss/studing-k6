// Módulos
// 3 tipos diferentes:
// 1. Módulos embutidos.
// 2. Módulos de remotos.
// 3. Módulos de sistema local de arquivos.

// Ex:
// Default modules:
import http from 'k6/http';

// Remote modules:
// Links das libs: https://jslib.k6.io/
import { AWSConfig, S3Client } from 'https://jslib.k6.io/aws/0.1.0/s3.js';

// Local modules:
import runTest from './testes.js';

