const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "platForms",
    {
      idPlatforms: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      namePlatforms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
