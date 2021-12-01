import db from '@/models/index.js';

const message = db.message;

const insertMessage = async ({ channelId, senderId, content }) => {
    const messageModel = await message.create({
        content,
        chatId: channelId,
        senderId,
    });
    return messageModel.id;
};

export default { insertMessage };
