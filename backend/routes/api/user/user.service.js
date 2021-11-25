import db from '../../../models/index.js';
import userDAO from './user.dao.js';

const update = async userInfo => {
    const transaction = await db.sequelize.transaction();
    try {
        await userDAO.updateNickname(userInfo);
        await transaction.commit();
    } catch (err) {
        await transaction.rollback();
        throw err;
    }
};

export default { update };
