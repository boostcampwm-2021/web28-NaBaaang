export default function (sequelize, DataTypes) {
    return sequelize.define(
        'user',
        {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            profileId: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            nickname: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            imageUrl: {
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
            underscored: true,
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
