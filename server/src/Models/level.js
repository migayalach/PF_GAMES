const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "level",
    {
      idLevel: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
