import channelService from './channel.service.js';
import STATUS from '../../../lib/util/statusCode.js';

const createChannel = async (req, res) => {
    try {
        const data = await channelService.create(req.body);
        res.status(STATUS.CREATED).json(data);
    } catch (error) {
        console.error(error);
    }
};

const getChannel = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await channelService.getChannelById(id);
        res.status(STATUS.OK).json(data);
    } catch (error) {
        console.error(error);
    }
};

export default { createChannel, getChannel };
