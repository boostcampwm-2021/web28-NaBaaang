import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index.js';
import swaggerRouter from './routes/api/swagger/index.js';
import channelRouter from './routes/api/channel/index.js';
import messageRouter from './routes/api/message/index.js';
import db from './models/index.js';

db.init();
const __dirname = path.resolve();

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/swagger', swaggerRouter);
app.use('/api/channels', channelRouter);
app.use('/api', messageRouter);

export default app;
