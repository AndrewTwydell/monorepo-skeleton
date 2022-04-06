import express, { NextFunction, Request, Response } from 'express';
import logger from 'logger';
import config from './config/config';
import cookieParser from 'cookie-parser';

const router = express();

declare global {
    namespace Express {
        interface Request {
            [key: string]: any;
        }
    }
}

if (config.node.ENV !== 'TEST') {
    router.use((req, res, next) => {
        res.on('finish', () => {
            logger.info(
                `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`
            );
        });
        next();
    });
}

router.use(express.json({ limit: '50mb' }));
router.use(express.urlencoded({ limit: '50mb', extended: false }));
router.use(cookieParser());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');

        logger.info('Returning allowed headers');
        return res.status(200).json({});
    }
    next();
});

router.use('/api', async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: `API ROUTE` });
});

router.use((req, res) => {
    const error = new Error(`Cannot ${req.method} route '${req.url}'`);
    return res.status(404).json({ message: error.message });
});

export default router;
