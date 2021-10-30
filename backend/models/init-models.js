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

    chat.belongsTo(channel, { as: 'channel', foreignKey: 'channel_id' });
    channel.hasMany(chat, { as: 'chats', foreignKey: 'channel_id' });
    watch.belongsTo(channel, { as: 'channel', foreignKey: 'channel_id' });
    channel.hasMany(watch, { as: 'watches', foreignKey: 'channel_id' });
    message.belongsTo(chat, { as: 'chat', foreignKey: 'chat_id' });
    chat.hasMany(message, { as: 'messages', foreignKey: 'chat_id' });
    channel.belongsTo(user, { as: 'streamer', foreignKey: 'streamer_id' });
    user.hasMany(channel, { as: 'channels', foreignKey: 'streamer_id' });
    follow.belongsTo(user, { as: 'streamer', foreignKey: 'streamer_id' });
    user.hasMany(follow, { as: 'follows', foreignKey: 'streamer_id' });
    follow.belongsTo(user, { as: 'follwer', foreignKey: 'follwer_id' });
    user.hasMany(follow, { as: 'follwer_follows', foreignKey: 'follwer_id' });
    message.belongsTo(user, { as: 'sender', foreignKey: 'sender_id' });
    user.hasMany(message, { as: 'messages', foreignKey: 'sender_id' });
    watch.belongsTo(user, { as: 'viewer', foreignKey: 'viewer_id' });
    user.hasMany(watch, { as: 'watches', foreignKey: 'viewer_id' });

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
