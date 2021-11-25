import db from '../../../models/index.js';

const User = db.user;

const getOrCreate = async ({ id, name, picture }) => {
    let options = {
        where: {
            profileId: id,
        },
        defaults: {
            profileId: id,
            nickname: name,
            imageUrl: picture,
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

const updateNickname = async ({ id, nickname }) => {
    try {
        const updatedUser = await User.update(nickname, { where: { id } });
        return updatedUser;
    } catch (error) {
        console.log(error);
    }
};

export default {
    getOrCreate,
    updateRefreshToken,
    getRefreshToken,
    updateNickname,
};
