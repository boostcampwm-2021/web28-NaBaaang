import channelService from './channel.service.js';
import STATUS from '../../../lib/util/statusCode.js';

const createChannel = async (req, res) => {
    try {
        const data = await channelService.create(req.body);
        res.status(STATUS.CREATED).json(data);
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

export default {
    createChannel,
    getChannel,
    getLiveChannels,
    openChannel,
    closeChannel,
};
