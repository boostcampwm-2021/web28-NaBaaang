import channelService from './channel.service.js';
import STATUS from '../../../lib/util/statusCode.js';
import authService from '../auth/auth.service.js';

const createChannel = async (req, res) => {
    try {
        const { userId: streamer_id, title, category, description } = req.body;
        const channelId = await channelService.create({
            streamer_id,
            title,
            category,
            description,
        });
        res.status(STATUS.CREATED).json(channelId);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json(error.message);
    }
};

const getChannel = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await channelService.getChannelById(id);
        res.status(STATUS.OK).json(data);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json(error.message);
    }
};

const getLiveChannels = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await channelService.getLiveChannels(id);
        res.status(STATUS.OK).json(data);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json(error.message);
    }
};

const openChannel = async (req, res) => {
    try {
        const { id } = req.params;
        await channelService.updateLive(id, true);
        res.status(STATUS.OK).json({ message: 'success' });
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json(error.message);
    }
};

const closeChannel = async (req, res) => {
    try {
        const { id } = req.params;
        await channelService.updateLive(id, false);
        res.status(STATUS.OK).json({ message: 'success' });
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json(error.message);
    }
};

const watchChannel = async (req, res) => {
    try {
        if (!authService.isAuthenticate(req.headers)) {
            const data = await channelService.getChannelById(id);
            res.status(STATUS.OK).json(data);
            return;
        }
        const { id } = req.params;
        const data = await channelService.watchChannel(req);
        res.status(STATUS.ACCEPT).json(data);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json(error.message);
    }
};

export default {
    createChannel,
    getChannel,
    getLiveChannels,
    openChannel,
    closeChannel,
    watchChannel,
};
