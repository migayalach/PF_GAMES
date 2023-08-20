const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('rating', {
    idRating: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amountStars: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  })
}