const { genders, game } = require('../DataBase/dataBase');
const { Op } = require("sequelize");

const filterByGender = async (gender) => {
  const gamesByGender = await genders.findOne({
    where: { nameGenders: gender },
    include: [game]
  });
  if (!gamesByGender.games) return [];
  return gamesByGender.games;
}

const filterByPrice = async (minPrice, maxPrice) => {
  const gamesByPrice = await game.findAll({
    where: { cost: { [Op.between]: [minPrice, maxPrice] } },
    include: [genders]
  });
  if (gamesByPrice.length === 0) return [];
  return gamesByPrice;
}

const filtersGames = async (gender, minPrice, maxPrice) => {
  const gamesByGender = await genders.findOne({
    where: { nameGenders: gender },
    include: [game]
  });
  if (!gamesByGender.games) return [];
  const gamesByPrice = gamesByGender.games.filter(game => game.cost >= minPrice && game.cost <= maxPrice);
  return gamesByPrice;
}

module.exports = { filterByGender, filterByPrice, filtersGames };