import messageDAO from './message.dao.js';
import { SERVER_ERROR_CODE } from '@/lib/error/constant/ErrorCode.js';

import db from '@/models/index.js';

const { ForeignKeyConstraintError } = db.Sequelize;
const { DATA_ACCESS_ERROR } = SERVER_ERROR_CODE;

const create = async ({ content, channelId, senderId }) => {
    try {
        return await messageDAO.insertMessage({ content, channelId, senderId });
    } catch (err) {
        if (error instanceof ForeignKeyConstraintError) {
            throw new ClientError(NOT_FOUND_USER, error.message);
        }
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

export default { create };
