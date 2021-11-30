import messageDAO from './message.dao.js';
import {
    SERVER_ERROR_CODE,
    CLIENT_ERROR_CODE,
} from '@/lib/error/constant/ErrorCode.js';

import ServerError from '@/lib/error/ServerError.js';
import ClientError from '@/lib/error/ClientError.js';

import db from '@/models/index.js';

const { ForeignKeyConstraintError } = db.Sequelize;
const { NOT_FOUND_USER } = CLIENT_ERROR_CODE;
const { DATA_ACCESS_ERROR } = SERVER_ERROR_CODE;

const create = async ({ content, channelId, senderId }) => {
    try {
        return await messageDAO.insertMessage({ content, channelId, senderId });
    } catch (err) {
        if (err instanceof ForeignKeyConstraintError) {
            throw new ClientError(NOT_FOUND_USER, err.message);
        }
        throw new ServerError(DATA_ACCESS_ERROR, err.message);
    }
};

export default { create };
