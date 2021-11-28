import db from '@/models/index.js';

const message = db.message;

const insertMessage = async ({ channelId, senderId, content }) => {
    try {
        const messageModel = await message.create({
            content,
            chatId: channelId,
            senderId,
        });
        return messageModel.id;
    } catch (error) {
        throw new Error('MESSAGE_NOT_CREATED');
    }
};

export default { insertMessage };
