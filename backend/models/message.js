import Sequelize from 'sequelize';

export default function (sequelize, DataTypes) {
    return sequelize.define(
        'message',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            content: {
                type: DataTypes.STRING(500),
                allowNull: true,
            },
            chat_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'chat',
                    key: 'id',
                },
            },
            sender_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            tableName: 'message',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
                {
                    name: 'fk_message_chat1_idx',
                    using: 'BTREE',
                    fields: [{ name: 'chat_id' }],
                },
                {
                    name: 'fk_message_user1_idx',
                    using: 'BTREE',
                    fields: [{ name: 'sender_id' }],
                },
            ],
        },
    );
}
