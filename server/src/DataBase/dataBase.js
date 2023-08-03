const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// MODELS
const platformsModel = require("../Models/platforms");
const gendersModel = require("../Models/genders");
const gamesModel = require("../Models/games");
const levelModel = require("../Models/level");
const userInfoModel = require("../Models/userInfo");
const saleModel = require("../Models/sale");
const detailModel = require("../Models/detail");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

platformsModel(sequelize);
gendersModel(sequelize);
gamesModel(sequelize);
levelModel(sequelize);
userInfoModel(sequelize);
saleModel(sequelize);
detailModel(sequelize);

const { platForms, genders, game, level, userInfo, sale, detail } =
  sequelize.models;

// RELATION

platForms.hasMany(game, { foreignKey: "idPlatforms" });
game.belongsTo(platForms, { foreignKey: "idPlatforms" });

genders.hasMany(game, { foreignKey: "idGenders" });
game.belongsTo(genders, { foreignKey: "idGenders" });

level.hasMany(userInfo, { foreignKey: "idLevel" });
userInfo.belongsTo(level, { foreignKey: "idLevel" });

userInfo.hasMany(sale, { foreignKey: "idUser" });
sale.belongsTo(userInfo, { foreignKey: "idUser" });

sale.hasMany(detail, { foreignKey: "idSale" });
detail.belongsTo(sale, { foreignKey: "idSale" });

game.hasMany(detail, { foreignKey: "idGame" });
detail.belongsTo(game, { foreignKey: "idGame" });

module.exports = { sequelize, ...sequelize.models };