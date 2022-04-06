import dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({ path: join(__dirname, '..', '..', '..', '..', '.env') });

const SERVER = {
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 4000,
};

const NODE = {
    ENV: process.env.NODE_ENV || 'PRODUCTION',
};

const defaultExport = {
    server: SERVER,
    node: NODE,
};

export default defaultExport;
