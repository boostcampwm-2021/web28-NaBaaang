import db from '../../../models/index.js';

const message = db.message;

const insertMessage = async ({ channelId, senderId, content }) => {
    try {
        const messageModel = await message.create({
            content,
            chatId: channelId, // to fix
            senderId,
        });

        return messageModel.id;
    } catch (error) {
        console.error(error);
    }
};

export default { insertMessage };
