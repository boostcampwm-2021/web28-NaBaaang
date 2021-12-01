import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import db from './models/index.js';
import { isDevEnv } from '@/lib/util/nodeEnvUtil.js';
import { loadRouter } from './routes/index.js';

db.init();

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
};

isDevEnv() && app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

loadRouter(app);

export default app;
