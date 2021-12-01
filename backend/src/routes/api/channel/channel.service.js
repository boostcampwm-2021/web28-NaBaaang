import channelDAO from './channel.dao.js';
import chatDao from '@/routes/api/chat/chat.dao.js';

import ROLE from './constant/role.js';
import CHANNEL_STATE from './constant/state.js';
import {
    SERVER_ERROR_CODE,
    CLIENT_ERROR_CODE,
} from '@/lib/error/constant/ErrorCode.js';

import requestHandler from '@/lib/util/requestHandler.js';

import ServerError from '@/lib/error/ServerError.js';
import ClientError from '@/lib/error/ClientError.js';

import { v4 } from 'uuid';
import db from '@/models/index.js';

const { ForeignKeyConstraintError } = db.Sequelize;
const { NOT_FOUND_USER } = CLIENT_ERROR_CODE;
const { DATA_ACCESS_ERROR } = SERVER_ERROR_CODE;

const create = async channelInfo => {
    const transaction = await db.sequelize.transaction();
    try {
        const streamKey = v4();
        channelInfo.streamKey = streamKey;
        const channelId = await channelDAO.insertChannel(
            channelInfo,
            transaction,
        );
        await chatDao.insertChat(channelId, transaction);
        await transaction.commit();
        return channelId;
    } catch (error) {
        await transaction.rollback();
        if (error instanceof ForeignKeyConstraintError) {
            throw new ClientError(NOT_FOUND_USER, error.message);
        }
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

const update = async channelInfo => {
    const transaction = await db.sequelize.transaction();
    try {
        await channelDAO.updateChannel(channelInfo, transaction);
        const updatedChannel = await channelDAO.findByChannelId(
            channelInfo.id,
            transaction,
        );
        await transaction.commit();
        return updatedChannel;
    } catch (error) {
        await transaction.rollback();
        if (error instanceof ForeignKeyConstraintError) {
            throw new ClientError(NOT_FOUND_USER, error.message);
        }
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

const getChannelById = async id => {
    const transaction = await db.sequelize.transaction();
    try {
        let result = await channelDAO.findByChannelId(id, transaction);
        await transaction.commit();
        return result;
    } catch (error) {
        await transaction.rollback();
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

const getChannelByStreamerId = async streamerId => {
    try {
        let result = await channelDAO.findByStreamerId(streamerId);
        return result;
    } catch (error) {
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

const getAuthenticatedChannelById = async ({ id, role }) => {
    const transaction = await db.sequelize.transaction();
    try {
        let result = await channelDAO.findByChannelId(id, transaction);

        if (role !== ROLE.OWNER) {
            delete result.dataValues.streamKey;
        }
        await transaction.commit();
        return result;
    } catch (error) {
        await transaction.rollback();
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
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
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

const changeChannelState = async (id, channelState) => {
    const transaction = await db.sequelize.transaction();
    try {
        let result;
        switch (channelState) {
            case CHANNEL_STATE.LIVE:
                result = await channelDAO.update(
                    { id, updateTarget: { isLive: true } },
                    transaction,
                );
                break;
            case CHANNEL_STATE.READY:
                result = await channelDAO.update(
                    { id, updateTarget: { isLive: false } },
                    transaction,
                );
                break;
            case CHANNEL_STATE.CLOSE:
                result = await channelDAO.update(
                    { id, updateTarget: { isLive: false, isDelete: true } },
                    transaction,
                );
                break;
        }

        await transaction.commit();
        return result;
    } catch (error) {
        await transaction.rollback();
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
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
        await transaction.commit();
        return channel;
    } catch (error) {
        await transaction.rollback();
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

const isChannelOwner = async req => {
    const transaction = await db.sequelize.transaction();
    try {
        const { channelId: expectedId } = req.params;
        const user = requestHandler.getUserFromHeader(req.headers);
        const channel = await channelDAO.findByUserId(user.id, transaction);
        await transaction.commit();
        return channel && expectedId === channel.id;
    } catch (error) {
        await transaction.rollback();
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

export default {
    create,
    update,
    getChannelById,
    getChannelByStreamerId,
    getAuthenticatedChannelById,
    getLiveChannels,
    changeChannelState,
    watchChannel,
    isChannelOwner,
};
