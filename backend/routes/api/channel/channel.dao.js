// import db from '../../../models/index.js';
import db from '../../../models/index.js';
const Channel = db.channel;
const Watch = db.watch;

const insertChannel = async (channelInfo, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    try {
        const savedChannel = await Channel.create(channelInfo, option);

        return savedChannel.id;
    } catch (error) {
        console.error(error);
    }
};

const updateChannel = async (channelInfo, transaction) => {
    let option = { returning: true };
    if (transaction) option.transaction = transaction;
    try {
        const { id, title, category, description } = channelInfo;
        const updatedChannel = await Channel.update(
            {
                title,
                category,
                description,
            },
            { where: { id } },
            option,
        );
        return updatedChannel;
    } catch (error) {
        console.error(error);
    }
};

const findByChannelId = async (channelId, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    try {
        const findedChannel = await Channel.findOne(
            {
                include: [
                    {
                        model: db.chat,
                        as: 'chat',
                        attributes: ['id'],
                    },
                    {
                        model: db.user,
                        as: 'streamer',
                        attributes: ['nickname', 'imageUrl'],
                    },
                ],
                where: {
                    id: channelId,
                },
            },
            option,
        );

        return findedChannel;
    } catch (error) {
        console.error(error);
    }
};
const findByStreamerId = async streamerId => {
    try {
        const findedChannel = await Channel.findOne({
            where: {
                streamerId,
                isDelete: false,
            },
        });

        return findedChannel;
    } catch (error) {
        console.error(error);
    }
};
const findAllLiveChannel = async transaction => {
    let option = {};
    if (transaction) option.transaction = transaction;
    try {
        const channels = await Channel.findAll(
            {
                include: {
                    model: db.user,
                    as: 'streamer',
                    attributes: ['nickname', 'imageUrl'],
                },
                where: { isLive: true },
            },

            option,
        );

        return channels;
    } catch (error) {
        console.error(error);
    }
};

const update = async ({ id, updateTarget }, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    try {
        const channels = await Channel.update(
            updateTarget,
            { where: { id } },
            option,
        );

        return channels;
    } catch (error) {
        console.error(error);
    }
};

const insertWatch = async (watchInfo, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    try {
        const watch = await Watch.create(watchInfo, option);

        return watch;
    } catch (error) {
        console.error(error);
    }
};

const findByUserId = async (streamerId, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    try {
        const channel = await Channel.findAll(
            {
                where: { streamerId },
            },

            option,
        );

        return channel;
    } catch (error) {
        console.error(error);
    }
};
export default {
    insertChannel,
    updateChannel,
    findByChannelId,
    findByStreamerId,
    findAllLiveChannel,
    update,
    insertWatch,
    findByUserId,
};
