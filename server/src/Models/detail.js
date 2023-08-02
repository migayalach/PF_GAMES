const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "detail",
    {
      idDetail: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
