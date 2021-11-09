import channelDAO from './channel.dao.js';
import db from '../../../models/index.js';
import { v4 } from 'uuid';

const create = async channelInfo => {
    const transaction = await db.sequelize.transaction();
    try {
        const stream_key = v4();
        channelInfo.stream_key = stream_key;
        const result = await channelDAO.insertChannel(channelInfo, transaction);

        await transaction.commit();
        return result;
    } catch (error) {
        await transaction.rollback();
        console.error(error);
    }
};

const getChannelById = async channelId => {
    const transaction = await db.sequelize.transaction();
    try {
        const result = await channelDAO.findByChannelId(channelId, transaction);

        await transaction.commit();
        return result;
    } catch (error) {
        await transaction.rollback();
        console.error(error);
    }
};

export default { create, getChannelById };
