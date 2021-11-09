import { create } from './message.service.js';

const createMessage = async (req, res, next) => {
    const { id: channelId } = req.params;
    const { sender_id: senderId, content } = req.body;

    await create({ content, channelId, senderId });
};

export { createMessage };
