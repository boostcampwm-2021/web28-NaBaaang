import userDAO from './user.dao.js';

import db from '@/models/index.js';

const update = async userInfo => {
    const transaction = await db.sequelize.transaction();
    try {
        const updatedUser = await userDAO.updateNickname(userInfo);
        await transaction.commit();
        return updatedUser[0];
    } catch (err) {
        await transaction.rollback();
        throw new ServerError(DATA_ACCESS_ERROR, error.message);
    }
};

export default { update };
