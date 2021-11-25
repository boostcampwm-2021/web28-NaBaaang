import userService from './user.service.js';
import STATUS from '../../../lib/util/statusCode.js';

const updateNickname = async (req, res) => {
    try {
        const { id } = req.params;
        const { nickname } = req.body;
        const updatedUser = await userService.update({ id, nickname });
        if (updatedUser) res.status(STATUS.OK).json(updatedUser);
        else throw new Error('NICKNAME IS NOT CHANGED');
    } catch (error) {
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};


export default { updateNickname };
