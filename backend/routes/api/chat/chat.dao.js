import db from '../../../models/index.js';
const Chat = db.chat;

const insertChat = async (channelId, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    try {
        const savedChat = await Chat.create(
            {
                channelId,
            },
            option,
        );

        return savedChat.id;
    } catch (error) {
        console.error(error);
    }
};

export default { insertChat };
