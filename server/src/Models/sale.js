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
      numVoucher: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataSale: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
    );
  };

  //agregar valor unico
  //que solo muestre la fecha no horas