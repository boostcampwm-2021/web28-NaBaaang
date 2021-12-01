import swaggerRouter from './api/swagger/index.js';
import channelRouter from './api/channel/index.js';
import chatRouter from './api/chat/index.js';
import authRouter from './api/auth/index.js';
import userRouter from './api/user/index.js';
import { errorMiddleware } from '@/lib/middlewares/error.js';

const loadRouter = app => {
    app.use('/swagger', swaggerRouter);
    app.use('/api/channels', channelRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/chats', chatRouter);
    app.use('/api/users', userRouter);
    app.use(errorMiddleware);
};

export { loadRouter };
