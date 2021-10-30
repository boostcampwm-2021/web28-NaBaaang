import Sequelize from 'sequelize';

export default function(sequelize, DataTypes) {
  return sequelize.define('watch', {
    viewer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    channel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'channel',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'watch',
    timestamps: false,
    indexes: [
      {
        name: "fk_watch_user1_idx",
        using: "BTREE",
        fields: [
          { name: "viewer_id" },
        ]
      },
      {
        name: "fk_watch_channel1_idx",
        using: "BTREE",
        fields: [
          { name: "channel_id" },
        ]
      },
    ]
  });
};
