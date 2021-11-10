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

const getChannels = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await channelService.getChannels(id);
        let groupedData = {};
        data.map(e => {
            if (Object.keys(groupedData).includes(e.category)) {
                groupedData[e.category].push(e);
            } else {
                groupedData[e.category] = [e];
            }
        });
        res.status(STATUS.OK).json(groupedData);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json(error.message);
    }
};

export default { createChannel, getChannel, getChannels };
