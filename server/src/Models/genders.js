const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "genders",
    {
      idGenders: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nameGenders: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
