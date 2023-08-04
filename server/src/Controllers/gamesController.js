const { game, genders, GenderGames } = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const axios = require("axios");
const { API_KEY, URL_GAMES, URL_GAME } = require("../Utils/url");
const { newArrGames, searchApi } = require("../Utils/gamesUtils");

const allGetGames = async () => {
  const apiResult = (await axios.get(`${URL_GAMES}`)).data.results;
  const apiGames = newArrGames(apiResult);
  const resultDBB = await game.findAll({
    include: {
      model: genders,
    },
  });
  // LIMPIAR RESULTADOS PARA DEVOLVER
  return [...resultDBB, ...apiGames];
};

const getGameName = async (name) => {
  // BUSCAR ESTILO LIKE EN LA API
  const apiResult = (await axios.get(`${URL_GAMES}`)).data.results;
  const apiGame = newArrGames(apiResult);
  const gameResponse = searchApi(name, apiGame);
  const dataName = await game.findAll({
    where: {
      nameGame: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: genders,
    },
  });
  // LIMPIAR RESULTADOS PARA DEVOLVER
  return [...dataName, ...gameResponse];
};

const getGamesId = async (idGame, typeData) => {
  const responseId =
    typeData === "number"
      ? (await axios.get(`${URL_GAME}/${idGame}?key=${API_KEY}`)).data
      : await game.findAll({
          where: {
            idGame,
          },
          include: {
            model: genders,
          },
        });
  // LIMPIAR RESPUESTA TANTO BASE DE DATOS COMO API
  // return newArrGames([responseId]);
  return responseId;
};

const createGame = async (
  idPlatforms,
  nameGame,
  image,
  cost,
  description,
  nameGender
) => {
  const newGame = await game.create({
    idPlatforms,
    nameGame,
    image,
    cost,
    description,
  });
  if (nameGender && nameGender.length > 0) {
    const itemGender = await genders.findAll({
      where: {
        nameGenders: nameGender,
      },
    });
    await newGame.addGenders(itemGender);
  }
  //ORDENAR EL RESULTADO EN UN SOLO OBJETO
  return { newGame, ...nameGender };
};

const updateGame = async (
  idGame,
  idPlatforms,
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
