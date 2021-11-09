import Sequelize from 'sequelize';

export default function (sequelize, DataTypes) {
    return sequelize.define(
        'channel',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            category: { type: DataTypes.STRING(45), allowNull: true },
            description: {
                type: DataTypes.STRING(500),
                allowNull: true,
            },
            streamer_id: {
                type: DataTypes.INTEGER,
                allowNull: true, // false 변경 필요
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
            stream_key: {
                type: DataTypes.STRING(100),
                allowNull: true, // false 변경 필요
            },
        },
        {
            sequelize,
            tableName: 'channel',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'fk_channel_user1_idx',
                    using: 'BTREE',
                    fields: [{ name: 'streamer_id' }],
                },
            ],
        },
    );
}
