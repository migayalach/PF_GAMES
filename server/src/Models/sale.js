const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "sale",
    {
      idSale: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      namnumFaceUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataSale: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
