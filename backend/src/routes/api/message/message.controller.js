import messageService from './message.service.js';

import STATUS from '@/lib/constant/statusCode.js';
import db from '@/models/index.js';
import { SERVER_ERROR_CODE } from '@/lib/error/constant/ErrorCode.js';
import errorHandler from '@/lib/util/errorHandler.js';

const { ConnectionRefusedError } = db.Sequelize;
const { SEQUELIZE_CONNECTION_REFURED_ERROR } = SERVER_ERROR_CODE;

const createMessage = async (req, res, next) => {
    try {
        const { id: channelId } = req.params;
        const { senderId, content } = req.body;
        const isValidParams = errorHandler.validateParameters(
            {
                channelId,
                senderId,
                content,
            },
            next,
        );
        if (!isValidParams) return;

        const messageId = await messageService.create({
            content,
            channelId,
            senderId,
        });

        res.status(STATUS.CREATED).json(messageId);
    } catch (err) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

export default { createMessage };
