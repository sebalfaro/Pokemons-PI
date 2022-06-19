const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('types', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },{
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
