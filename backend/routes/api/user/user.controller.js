import userService from './user.service.js';
import STATUS from '../../../lib/util/statusCode.js';

const updateNickname = async (req, res) => {
    try {
        const { id } = req.params;
        const { nickname } = req.body;
        const updatedNickname = await userService.update({ id, nickname });
        res.status(STATUS.OK).json(updatedNickname);
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default { updateNickname };
