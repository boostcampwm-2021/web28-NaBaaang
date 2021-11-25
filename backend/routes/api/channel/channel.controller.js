import channelService from './channel.service.js';
import STATUS from '../../../lib/util/statusCode.js';
import authService from '../auth/auth.service.js';
import requestHandler from '../../../lib/util/requestHandler.js';
import ROLE from './constant/role.js';
import CHANNEL_STATE from './constant/state.js';

const createChannel = async (req, res) => {
    try {
        const { userId: streamerId, title, category, description } = req.body;
        const channelId = await channelService.create({
            streamerId,
            title,
            category,
            description,
        });
        res.status(STATUS.CREATED).json(channelId);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};

const updateChannel = async (req, res, next) => {
    try {
        const { id } = req.params;
        // parameter undefined일 경우 에러 처리
        const { title, category, description } = req.body;
        const updatedChannel = await channelService.update({
            id,
            title,
            category,
            description,
        });
        res.status(STATUS.OK).json(updatedChannel);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
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
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};

const getChannel = async (req, res) => {
    try {
        const { id, role } = req.params;

        let data = await channelService.getChannelById(id);
        if (!data || !Object.keys(data).length) {
            res.status(STATUS.NO_CONTENT).json();
        } else {
            res.status(STATUS.OK).json(data);
        }
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
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
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};

const openChannel = async (req, res) => {
    try {
        const { id } = req.params;
        await channelService.changeChannelState(id, CHANNEL_STATE.LIVE);
        res.status(STATUS.OK).json({ message: 'success' });
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};
const standByChannel = async (req, res) => {
    try {
        const { id } = req.params;
        await channelService.changeChannelState(id, CHANNEL_STATE.READY);
        res.status(STATUS.OK).json({ message: 'success' });
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};
const closeChannel = async (req, res) => {
    try {
        const { id } = req.params;
        await channelService.changeChannelState(id, CHANNEL_STATE.CLOSE);
        res.status(STATUS.OK).json({ message: 'success' });
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
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
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
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
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
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
