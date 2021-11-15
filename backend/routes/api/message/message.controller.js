import { create } from './message.service.js';

import { existUndefinedInParameters } from '../../../lib/util/util.js';
import STATUS from '../../../lib/util/statusCode.js';

const createMessage = async (req, res, next) => {
    const { id: channelId } = req.params;
    const { sender_id: senderId, content } = req.body;

    if (existUndefinedInParameters(channelId, senderId, content)) {
        res.status(STATUS.BAD_REQUEST).send();
    }

    try {
        const messageId = await create({ content, channelId, senderId });

        res.status(STATUS.CREATED).json(messageId);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).send();
    }
};

export { createMessage };
