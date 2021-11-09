import { insertMessage } from './message.dao.js';

const create = async ({ content, channelId, senderId }) => {
    await insertMessage({ content, channelId, senderId });
};

export { create };
