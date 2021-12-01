import db from '@/models/index.js';

const Channel = db.channel;
const Watch = db.watch;

const insertChannel = async (channelInfo, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    const savedChannel = await Channel.create(channelInfo, option);
    return savedChannel.id;
};

const updateChannel = async (channelInfo, transaction) => {
    let option = { returning: true };
    if (transaction) option.transaction = transaction;
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
};

const findByChannelId = async (channelId, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
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
                isDelete: false,
            },
        },
        option,
    );
    return findedChannel;
};

const findByStreamerId = async streamerId => {
    const findedChannel = await Channel.findOne({
        where: {
            streamerId,
            isDelete: false,
        },
    });

    return findedChannel;
};

const findAllLiveChannel = async transaction => {
    let option = {};
    if (transaction) option.transaction = transaction;
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
};

const update = async ({ id, updateTarget }, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    const channels = await Channel.update(
        updateTarget,
        { where: { id } },
        option,
    );
    return channels;
};

const insertWatch = async (watchInfo, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    const watch = await Watch.create(watchInfo, option);
    return watch;
};

const findByUserId = async (streamerId, transaction) => {
    let option = {};
    if (transaction) option.transaction = transaction;
    const channel = await Channel.findAll(
        {
            where: { streamerId },
        },

        option,
    );
    return channel;
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
