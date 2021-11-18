import Sequelize from 'sequelize';
import _channel from './channel.js';
import _chat from './chat.js';
import _follow from './follow.js';
import _message from './message.js';
import _user from './user.js';
import _watch from './watch.js';

const DataTypes = Sequelize.DataTypes;

function initModels(sequelize) {
    const channel = _channel(sequelize, DataTypes);
    const chat = _chat(sequelize, DataTypes);
    const follow = _follow(sequelize, DataTypes);
    const message = _message(sequelize, DataTypes);
    const user = _user(sequelize, DataTypes);
    const watch = _watch(sequelize, DataTypes);

    chat.belongsTo(channel, { as: 'channel', foreignKey: 'channelId' });
    channel.hasOne(chat, { as: 'chat', foreignKey: 'channelId' });
    watch.belongsTo(channel, { as: 'channel', foreignKey: 'channelId' });
    channel.hasMany(watch, { as: 'watches', foreignKey: 'channelId' });
    message.belongsTo(chat, { as: 'chat', foreignKey: 'chatId' });
    chat.hasMany(message, { as: 'messages', foreignKey: 'chatId' });
    channel.belongsTo(user, { as: 'streamer', foreignKey: 'streamerId' });
    user.hasMany(channel, { as: 'channels', foreignKey: 'streamerId' });
    follow.belongsTo(user, { as: 'streamer', foreignKey: 'streamerId' });
    user.hasMany(follow, { as: 'follows', foreignKey: 'streamerId' });
    follow.belongsTo(user, { as: 'follwer', foreignKey: 'follwerId' });
    user.hasMany(follow, { as: 'follwer_follows', foreignKey: 'follwerId' });
    message.belongsTo(user, { as: 'sender', foreignKey: 'senderId' });
    user.hasMany(message, { as: 'messages', foreignKey: 'senderId' });
    watch.belongsTo(user, { as: 'viewer', foreignKey: 'viewerId' });
    user.hasMany(watch, { as: 'watches', foreignKey: 'viewerId' });

    return {
        channel,
        chat,
        follow,
        message,
        user,
        watch,
    };
}
export default initModels;
// export { initModels };
// export const default = initModels;
