import channelService from './channel.service.js';
import authService from '@/routes/api/auth/auth.service.js';

import STATUS from '@/lib/constant/statusCode.js';
import ROLE from './constant/role.js';
import CHANNEL_STATE from './constant/state.js';
import {
    CLIENT_ERROR_CODE,
    SERVER_ERROR_CODE,
} from '@/lib/error/constant/ErrorCode';

import requestHandler from '@/lib/util/requestHandler.js';
import errorHandler from '@/lib/util/errorHandler.js';

import ServerError from '@/lib/error/ServerError.js';
import ClientError from '@/lib/error/ClientError.js';

import db from '@/models/index.js';

const { ConnectionRefusedError } = db.Sequelize;
const { SEQUELIZE_CONNECTION_REFURED_ERROR } = SERVER_ERROR_CODE;

const createChannel = async (req, res, next) => {
    // streamerId 로 변경
    const { userId: streamerId, title, category, description } = req.body;

    const isValidParams = errorHandler.validateParameters(
        {
            streamerId,
            title,
            category,
            description,
        },
        next,
    );
    if (!isValidParams) return;
    try {
        const channelId = await channelService.create({
            streamerId,
            title,
            category,
            description,
        });
        res.status(STATUS.CREATED).json(channelId);
    } catch (err) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const updateChannel = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, category, description } = req.body;
        const isValidParams = errorHandler.validateParameters(
            {
                id,
                title,
                category,
                description,
            },
            next,
        );
        if (!isValidParams) return;

        updatedChannel = await channelService.update({
            id,
            title,
            category,
            description,
        });
        res.status(STATUS.OK).json(updatedChannel);
    } catch (err) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const setUserRole = async (req, res, next) => {
    try {
        if (!authService.isAuthenticate(req.headers)) {
            requestHandler.setRole(req, ROLE.GUEST);
            next();
            return;
        }
        const { id } = req.params;
        const channel = await channelService.getChannelById(id);
        const user = requestHandler.getUserFromHeader(req.headers);
        if (!channel) {
            res.status(STATUS.NOT_FOUND).json(data);
            return;
        }

        if (channel.streamerId === user.id) {
            requestHandler.setRole(req, ROLE.OWNER);
            next();
            return;
        }

        requestHandler.setRole(req, ROLE.VIEWER);
        next();
    } catch (err) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const getChannel = async (req, res, next) => {
    const { id } = req.params;
    if (id === undefined) {
        next(
            new ClientError(
                CLIENT_ERROR_CODE.INVALID_PARAMERTES,
                undefinedParams,
            ),
        );
        return;
    }

    try {
        let data = await channelService.getChannelById(id);
        if (!data || !Object.keys(data).length) {
            res.status(STATUS.NO_CONTENT).json();
        } else {
            res.status(STATUS.OK).json(data);
        }
    } catch (err) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const getLiveChannels = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await channelService.getLiveChannels(id);
        if (!data || !Object.keys(data).length) {
            res.status(STATUS.NO_CONTENT).json();
        } else {
            res.status(STATUS.OK).json(data);
        }
    } catch (err) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const openChannel = async (req, res) => {
    try {
        const { id } = req.params;
        await channelService.changeChannelState(id, CHANNEL_STATE.LIVE);
        res.status(STATUS.OK).json({ message: 'success' });
    } catch (error) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const standByChannel = async (req, res) => {
    try {
        const { id } = req.params;
        await channelService.changeChannelState(id, CHANNEL_STATE.READY);
        res.status(STATUS.OK).json({ message: 'success' });
    } catch (error) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const closeChannel = async (req, res) => {
    try {
        const { id } = req.params;
        await channelService.changeChannelState(id, CHANNEL_STATE.CLOSE);
        res.status(STATUS.OK).json({ message: 'success' });
    } catch (error) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const watchChannel = async (req, res) => {
    try {
        if (!authService.isAuthenticate(req.headers)) {
            const { id } = req.params;
            const data = await channelService.getChannelById({ id });
            res.status(STATUS.OK).json(data);
            return;
        }
        const data = await channelService.watchChannel(req);
        res.status(STATUS.ACCEPT).json(data);
    } catch (error) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

const getAuthenticatedChannel = async (req, res) => {
    try {
        const { id, role } = req.params;
        let data = await channelService.getAuthenticatedChannelById({
            id,
            role,
        });
        if (!data || !Object.keys(data).length) {
            res.status(STATUS.NO_CONTENT).json();
        } else {
            res.status(STATUS.OK).json({ ...data.dataValues, role });
        }
    } catch (error) {
        if (err instanceof ConnectionRefusedError) {
            next(
                new ServerError(
                    SEQUELIZE_CONNECTION_REFURED_ERROR,
                    err.message,
                ),
            );
        } else {
            next(err);
        }
    }
};

export default {
    createChannel,
    updateChannel,
    setUserRole,
    getChannel,
    getLiveChannels,
    openChannel,
    standByChannel,
    closeChannel,
    watchChannel,
    getAuthenticatedChannel,
};
