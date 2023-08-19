const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

// MODELS
const gendersModel = require("../Models/genders");
const gamesModel = require("../Models/games");
const levelModel = require("../Models/level");
const userInfoModel = require("../Models/userInfo");
const saleModel = require("../Models/sale");
const detailModel = require("../Models/detail");
const CompraModel = require("../Models/Compra");
const ratingModel = require("../Models/rating");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

gendersModel(sequelize);
gamesModel(sequelize);
levelModel(sequelize);
userInfoModel(sequelize);
saleModel(sequelize);
detailModel(sequelize);
CompraModel(sequelize);
ratingModel(sequelize);

const { genders, game, level, userInfo, sale, detail, rating } =
  sequelize.models;

// RELATION

genders.belongsToMany(game, { through: "GenderGames", timestamps: false  });
game.belongsToMany(genders, { through: "GenderGames", timestamps: false  });

level.hasMany(userInfo, { foreignKey: "idLevel" });
userInfo.belongsTo(level, { foreignKey: "idLevel" });

userInfo.hasMany(sale, { foreignKey: "idUser" });
sale.belongsTo(userInfo, { foreignKey: "idUser" });

sale.hasMany(detail, { foreignKey: "idSale" });
detail.belongsTo(sale, { foreignKey: "idSale" });

game.hasMany(detail, { foreignKey: "idGame" });
detail.belongsTo(game, { foreignKey: "idGame" });

userInfo.belongsToMany(game, { through: 'Compra'});
game.belongsToMany(userInfo, { through: 'Compra'});

rating.belongsToMany(game, { through: 'rating'});
rating.belongsToMany(userInfo, {through: "rating"});


module.exports = { sequelize, ...sequelize.models };
