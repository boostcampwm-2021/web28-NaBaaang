import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import db from './models/index.js';

import { loadRouter } from './routes/index.js';

db.init();
const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

loadRouter(app);

export default app;
