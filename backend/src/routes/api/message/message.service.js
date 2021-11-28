import messageDAO from './message.dao.js';

const create = async ({ content, channelId, senderId }) => {
    return await messageDAO.insertMessage({ content, channelId, senderId });
};

export default { create };
