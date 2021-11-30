import db from '@/models/index.js';

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
    const result = await User.findOrCreate(options);

    return result;
};

const findById = async id => {
    const user = await User.findOne({ where: { id } });
    return user;
};

const updateRefreshToken = async (id, refreshToken) => {
    const updatedUser = await User.update(
        { refresh_token: refreshToken },
        { where: { id } },
    );

    return updatedUser;
};

const getRefreshToken = async id => {
    const user = await User.findOne({ where: { id } });

    return user.refresh_token;
};

const updateNickname = async ({ id, nickname }) => {
    const result = await User.update({ nickname }, { where: { id } });
    return result;
};

export default {
    getOrCreate,
    findById,
    updateRefreshToken,
    getRefreshToken,
    updateNickname,
};
