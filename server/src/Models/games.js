const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "game",
    {
      idGame: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nameGame: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
