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

const getLiveChannels = async () => {
    const transaction = await db.sequelize.transaction();
    try {
        const result = await channelDAO.findAllLiveChannel(transaction);
        let groupedData = {};
        result.map(e => {
            if (Object.keys(groupedData).includes(e.category)) {
                groupedData[e.category].push(e);
            } else {
                groupedData[e.category] = [e];
            }
        });
        await transaction.commit();
        return result;
    } catch (error) {
        await transaction.rollback();
        console.error(error);
    }
};

const updateLive = async (id, isLive) => {
    const transaction = await db.sequelize.transaction();
    try {
        const result = await channelDAO.update(
            { id, updateTarget: { isLive } },
            transaction,
        );

        await transaction.commit();
        return result;
    } catch (error) {
        await transaction.rollback();
        console.error(error);
    }
};

export default { create, getChannelById, getLiveChannels, updateLive };
