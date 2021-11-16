export default function (sequelize, DataTypes) {
    return sequelize.define(
        'user',
        {
            id: {
                // autoIncrement: true,
                type: DataTypes.STRING(100),
                allowNull: false,
                primaryKey: true,
            },
            nickname: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            image_url: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            refresh_token: {
                type: DataTypes.STRING(200),
            },
        },
        {
            sequelize: sequelize,
            tableName: 'user',
            timestamps: false,
            indexes: [
                {
                    name: 'PRIMARY',
                    unique: true,
                    using: 'BTREE',
                    fields: [{ name: 'id' }],
                },
            ],
        },
    );
}
