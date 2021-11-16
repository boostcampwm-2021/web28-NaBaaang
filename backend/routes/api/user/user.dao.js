import db from '../../../models/index.js';

const User = db.user;

const getOrCreate = async ({ id, name, picture }) => {
    let options = {
        where: {
            id,
        },
        defaults: {
            id,
            nickname: name,
            image_url: picture,
        },
    };
    try {
        const result = await User.findOrCreate(options);

        return result;
    } catch (error) {
        console.error(error);
    }
};

const updateRefreshToken = async (id, refreshToken) => {
    try {
        const updatedUser = await User.update(
            { refresh_token: refreshToken },
            { where: { id } },
        );

        return updatedUser;
    } catch (error) {
        console.error(error);
    }
};

const getRefreshToken = async id => {
    try {
        const user = await User.findOne({ where: { id } });

        return user.refresh_token;
    } catch (error) {
        console.error(error);
    }
};

export default { getOrCreate, updateRefreshToken, getRefreshToken };
