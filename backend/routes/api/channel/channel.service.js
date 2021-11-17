import channelDAO from './channel.dao.js';
import db from '../../../models/index.js';
import { v4 } from 'uuid';
import chatDao from '../chat/chat.dao.js';
import requestHandler from '../../../lib/util/requestHandler.js';

const create = async channelInfo => {
    const transaction = await db.sequelize.transaction();
    try {
        const stream_key = v4();
        channelInfo.stream_key = stream_key;
        const channelId = await channelDAO.insertChannel(
            channelInfo,
            transaction,
        );
        const chatId = await chatDao.insertChat(channelId, transaction);
        await transaction.commit();
        return channelId;
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
        return groupedData;
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

const watchChannel = async req => {
    const transaction = await db.sequelize.transaction();
    try {
        const { id } = req.params;
        const user = requestHandler.getUserFromHeader(req.headers);

        const channel = await channelDAO.findByChannelId(id, transaction);
        await channelDAO.insertWatch(
            { channelId: channel.id, viewerId: user.id },
            transaction,
        );
        return channel;
    } catch (error) {
        await transaction.rollback();
        console.error(error);
    }
};
export default {
    create,
    getChannelById,
    getLiveChannels,
    updateLive,
    watchChannel,
};
