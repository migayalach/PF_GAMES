const { genders, game } = require('../DataBase/dataBase');
const { Op } = require("sequelize");

const filterByGender = async (gender) => {
  const gamesByGender = await genders.findAll({
    where: { nameGenders: gender },
    include: [game]
  });
  return gamesByGender.games;
}

const filterByPrice = async (minPrice, maxPrice) => {
  const gamesByPrice = await game.findAll({
    where: { cost: { [Op.between]: [minPrice, maxPrice] } },
    include: [genders]
  });
  return gamesByPrice;
}

const filtersGames = async (gender, minPrice, maxPrice) => {
  const gamesByGender = await genders.findAll({
    where: { nameGenders: gender },
    include: [game]
  });
  const gamesByPrice = gamesByGender.games.filter(game => game.cost >= minPrice && game.cost <= maxPrice);
  return gamesByPrice;
}

module.exports = { filterByGender, filterByPrice, filtersGames };