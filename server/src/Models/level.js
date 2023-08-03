const { DataTypes, INTEGER } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "level",
    {
      idLevel: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameLevel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
