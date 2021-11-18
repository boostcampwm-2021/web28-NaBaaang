export default function (sequelize, DataTypes) {
    return sequelize.define(
        'chat',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
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
            tableName: 'chat',
            timestamps: false,
            underscored: true,

            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'fk_chat_channel1_idx',
                    using: 'BTREE',
                    fields: [{ name: 'channel_id' }],
                },
            ],
        },
    );
}
