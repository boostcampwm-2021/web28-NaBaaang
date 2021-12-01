import Sequelize from 'sequelize';

export default function (sequelize, DataTypes) {
    return sequelize.define(
        'follow',
        {
            streamerId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
            follwerId: {
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
            tableName: 'follow',
            timestamps: false,
            underscored: true,
            indexes: [
                {
                    name: 'fk_follow_user1_idx',
                    using: 'BTREE',
                    fields: [{ name: 'streamer_id' }],
                },
                {
                    name: 'fk_follow_user2_idx',
                    using: 'BTREE',
                    fields: [{ name: 'follwer_id' }],
                },
            ],
        },
    );
}
