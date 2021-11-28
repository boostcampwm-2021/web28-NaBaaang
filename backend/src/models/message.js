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
            chatId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'chat',
                    key: 'id',
                },
            },
            senderId: {
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
            underscored: true,
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
