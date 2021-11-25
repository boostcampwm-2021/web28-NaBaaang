import STATUS from '../../../lib/util/statusCode.js';
import channelService from '../channel/channel.service.js';

const getChannelOwnedByUser = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await channelService.getChannelByStreamerId(id);
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

export default {
    getChannelOwnedByUser,
};
