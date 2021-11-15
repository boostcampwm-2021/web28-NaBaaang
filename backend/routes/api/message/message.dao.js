import db from '../../../models/index.js';

const message = db.message;

const insertMessage = async ({ channelId, senderId, content }) => {
    try {
        const messageModel = await message.create({
            content,
            chat_id: channelId,
            sender_id: senderId,
        });

        return messageModel.id;
    } catch (error) {
        console.error(error);
    }
};

export default { insertMessage };
