import userService from './user.service.js';
import channelService from '@/routes/api/channel/channel.service.js';

import STATUS from '@/lib/constant/statusCode.js';

import { SERVER_ERROR_CODE } from '@/lib/error/constant/ErrorCode.js';

import db from '@/models/index.js';
import errorHandler from '@/lib/util/errorHandler.js';

const { ConnectionRefusedError } = db.Sequelize;
const { SEQUELIZE_CONNECTION_REFURED_ERROR } = SERVER_ERROR_CODE;

const updateNickname = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nickname } = req.body;
        const isValidParams = errorHandler.validateParameters(
            {
                id,
                nickname,
            },
            next,
        );
        if (!isValidParams) return;

        const { updatedUser, accessToken, refreshToken } =
            await userService.update({ id, nickname });

        res.status(STATUS.OK).json({ updatedUser, accessToken, refreshToken });
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

const getChannelOwnedByUser = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await channelService.getChannelByStreamerId(id);
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

export default { updateNickname, getChannelOwnedByUser };
