const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "systemGame",
    {
      idSystem: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nameSystem: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
