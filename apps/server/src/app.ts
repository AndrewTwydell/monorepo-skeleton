import http from 'http';
import server from './server';
import config from './config/config';
import logger from 'logger';

const httpServer = http.createServer(server);
httpServer.listen(config.server.port, () => {
    logger.info('####################################################');
    logger.info(`Server running on port ${config.server.port}`);
    logger.info('####################################################');
});
