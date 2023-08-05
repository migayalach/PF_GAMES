const {
  game,
  genders,
  GenderGames,
} = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const axios = require("axios");
const { API_KEY, URL_GAMES, URL_GAME } = require("../Utils/url");
const {
  newArrGames,
  searchApi,
  resCreateGame,
  newGameId
} = require("../Utils/gamesUtils");

const allGetGames = async () => {
  const resultDBB = await game.findAll({
    include: [genders],
  });
  if (resultDBB.length > 0) return resultDBB;
  const apiResult = (await axios.get(`${URL_GAMES}`)).data.results;
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
    include: [genders]
  });
  // LIMPIAR RESULTADOS PARA DEVOLVER
  return gamesResult;
};

const getGameName = async (name) => {
  // BUSCAR ESTILO LIKE EN LA API
  const gamesByName = await game.findAll({
    where: { nameGame: { [Op.iLike]: `%${name}%` } },
    include: [genders]
  });
  // LIMPIAR RESULTADOS PARA DEVOLVER
  return gamesByName;
};

const getGamesId = async (idGame, typeData) => {
  const gameById = await game.findByPk(idGame, {
    include: [genders]
  });
  // LIMPIAR RESPUESTA TANTO BASE DE DATOS COMO API
  // return newArrGames([responseId]);
  return gameById;
};

const createGame = async (
  nameGame,
  image,
  cost,
  description,
  idsGenders
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
    where: { idGenders: idsGenders }
  })
  await newGame.setGenders(gendersBD);
  const totalGames = await game.findAll({
    include: [genders]
  });
  return totalGames;
};

const updateGame = async (
  idGame,
  nameGame,
  image,
  cost,
  description,
  nameGender
) => {
  const [updatedRowsCount, updatedRows] = await game.update(
    { idPlatforms, nameGame, image, cost, description },
    { where: { idGame }, returning: true }
  );

  // await GenderGames.destroy({
  //   where: {
  //     gameIdGame: idGame,
  //   },
  // });

  // await GenderGames.update({
  //   where: { gameIdGame: nameGender },
  // });

  return "Se actualizo :D";
};

const delGame = async (idGame) => {
  const response = await game.destroy({
    where: {
      idGame,
    },
  });
  console.log(response);
  if (response === 1) {
    return `Se elimino exitosamente`;
  }
  return `No se pudo eliminar`;
};

module.exports = {
  createGame,
  updateGame,
  allGetGames,
  getGameName,
  getGamesId,
  delGame,
};
