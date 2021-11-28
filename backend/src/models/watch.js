export default function (sequelize, DataTypes) {
    return sequelize.define(
        'watch',
        {
            viewerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
            channelId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'channel',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            tableName: 'watch',
            timestamps: false,
            underscored: true,
            indexes: [
                {
                    name: 'fk_watch_user1_idx',
                    using: 'BTREE',
                    fields: [{ name: 'viewer_id' }],
                },
                {
                    name: 'fk_watch_channel1_idx',
                    using: 'BTREE',
                    fields: [{ name: 'channel_id' }],
                },
            ],
        },
    );
}
