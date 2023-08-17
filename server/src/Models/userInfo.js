const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "userInfo",
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nameUser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ban: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
      // password: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // image: {
      //   type: DataTypes.TEXT,
      //   allowNull: true,
      // },
    },
    {
      timestamps: false,
    }
  );
};