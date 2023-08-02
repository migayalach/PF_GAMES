const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// MODELS
const systemGameModel = require("../Models/systemGame");
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

systemGameModel(sequelize);
platformsModel(sequelize);
gendersModel(sequelize);
gamesModel(sequelize);
levelModel(sequelize);
userInfoModel(sequelize);
saleModel(sequelize);
detailModel(sequelize);

const { systemGame, platForms, genders, game, level, userInfo, sale, detail } =
  sequelize.models;

// RELATION
systemGame.hasMany(genders, { foreignKey: "idSystem" });
genders.belongsTo(systemGame, { foreignKey: "idSystem" });

platForms.hasMany(systemGame, { foreignKey: "idPlatforms" });
systemGame.belongsTo(platForms, { foreignKey: "idPlatforms" });

game.hasMany(systemGame, { foreignKey: "idGenders" });
systemGame.belongsTo(game, { foreignKey: "idGenders" });

level.hasMany(userInfo, { foreignKey: "idLevel" });
userInfo.belongsTo(level, { foreignKey: "idLevel" });

userInfo.hasMany(sale, { foreignKey: "idUser" });
sale.belongsTo(userInfo, { foreignKey: "idUser" });

sale.hasMany(detail, { foreignKey: "idSale" });
detail.belongsTo(sale, { foreignKey: "idSale" });

game.hasMany(detail, { foreignKey: "idGame" });
detail.belongsTo(game, { foreignKey: "idGame" });

module.exports = { sequelize, ...sequelize.models };
