const {
  game,
  genders,
  GenderGames,
} = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const { URL_GAMES } = require("../Utils/url");
const {
  newGameId
} = require("../Utils/gamesUtils");
const { getApi } = require('../Utils/getApi');

const allGetGames = async () => {
  const resultDBB = await game.findAll({
    where: { available: true },
    include: [genders],
  });
  if (resultDBB.length > 0) return resultDBB;
  const apiResult = await getApi(URL_GAMES);
  const apiGames = await Promise.all(apiResult.map(async (game) => {
    const gameOrigin = await newGameId(game.id);
    return gameOrigin;
  }));
  for (let i = 0; i < apiGames.length; i++) {
    const newGame = {
      nameGame: apiGames[i].nameGame,
      description: apiGames[i].description,
      image: apiGames[i].image,
      cost: apiGames[i].cost,
    }
    const createGame = await game.create(newGame);
    const gendersGame = apiGames[i].genders?.map(gn => gn.name);
    for (let j = 0; j < gendersGame.length; j++) {
      const genre = await genders.findOne({ where: { nameGenders: gendersGame[j] } });
      await createGame.addGenders(genre);
    }
  }
  const gamesResult = await game.findAll({
    where: { available: true },
    include: [genders]
  });
  // LIMPIAR RESULTADOS PARA DEVOLVER
  return gamesResult;
};

const getGameName = async (name) => {
  // BUSCAR ESTILO LIKE EN LA API
  const gamesByName = await game.findAll({
    where: { nameGame: { [Op.iLike]: `%${name}%` }, available: true },
    include: [genders]
  });
  // LIMPIAR RESULTADOS PARA DEVOLVER
  return gamesByName;
};

const getGamesId = async (idGame) => {
  const gameById = await game.findByPk(idGame, {
    include: [genders]
  });
  return gameById;
};

const createGame = async (
  nameGame,
  image,
  cost,
  description,
  namesGenders
) => {
  const [newGame, created] = await game.findOrCreate({
    where: { nameGame },
    defaults: {
      nameGame,
      image,
      cost,
      description,
    }
  });
  if (!created) return { error: "Game ya existe" }
  const gendersBD = await genders.findAll({
    where: { nameGenders: namesGenders }
  })
  await newGame.setGenders(gendersBD);
  const totalGames = await game.findAll({
    where: { available: true },
    include: [genders]
  });
  return totalGames;
};

const updateGame = async (
  idGame,
  updatedProps
) => {
  const dbGame = await game.findByPk(idGame);
  if (updatedProps.namesGenders) {
    await dbGame.setGenders([]);
    const newGenders = await genders.findAll({
      where: { nameGenders: updatedProps.namesGenders },
    });
    await dbGame.addGenders(newGenders);
  }
  await dbGame.update(updatedProps);
  const allGames = await game.findAll({
    where: { available: true },
    include: [genders]
  });
  return allGames;
};

const delGame = async (idGame) => {
  const dbGame = await game.findByPk(idGame);
  const newAvailable = !dbGame.available;
  await dbGame.update({ available: newAvailable });
  const allGames = await game.findAll({
    where: { available: true },
    include: [genders]
  });
  return allGames;
};

module.exports = {
  createGame,
  updateGame,
  allGetGames,
  getGameName,
  getGamesId,
  delGame,
};