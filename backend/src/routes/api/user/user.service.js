import userDAO from './user.dao.js';

import {
    SERVER_ERROR_CODE,
    CLIENT_ERROR_CODE,
} from '@/lib/error/constant/ErrorCode.js';

import ServerError from '@/lib/error/ServerError.js';
import ClientError from '@/lib/error/ClientError.js';
import jwtUtil from '@/lib/util/jwtUtil.js';

import db from '@/models/index.js';

const { NOT_FOUND_USER } = CLIENT_ERROR_CODE;

const update = async userInfo => {
    const transaction = await db.sequelize.transaction();
    try {
        await userDAO.updateNickname(userInfo);
        const updatedUser = await userDAO.findById(userInfo.id);

        if (!updatedUser) {
            throw new ClientError(
                NOT_FOUND_USER,
                `USER[${userInfo.id}] NOT FOUND`,
            );
        }

        const accessToken = jwtUtil.sign(updatedUser);
        const refreshToken = jwtUtil.refresh();
        await userDAO.updateRefreshToken(updatedUser.id, refreshToken);

        await transaction.commit();
        return { updatedUser, accessToken, refreshToken };
    } catch (err) {
        await transaction.rollback();
        if (err instanceof ClientError) {
            throw err;
        }
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

export default { update };
