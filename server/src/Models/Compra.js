const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Compra', {
    idBought: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
})}