import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index.js';
import swaggerRouter from './routes/api/swagger/index.js';
import channelRouter from './routes/api/channel/index.js';
import chatRouter from './routes/api/chat/index.js';
import authRouter from './routes/api/auth/index.js';
import userRouter from './routes/api/user/index.js';
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
app.use('/api/auth', authRouter);
app.use('/api/chats', chatRouter);
app.use('/api/users', userRouter);

export default app;
