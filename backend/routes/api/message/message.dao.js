import db from '../../../models/index.js';

const message = db.message;

const insertMessage = async ({ channelId, senderId, content }) => {
    try {
        await message.create({
            content,
            chat_id: channelId,
            sender_id: senderId,
        });
    } catch (error) {
        console.error(error);
    }
};

export { insertMessage };
