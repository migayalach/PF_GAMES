const { game, genders } = require("../DataBase/dataBase");
const axios = require("axios");
const { API_KEY, URL_GAMES, URL_GAME } = require("../Utils/url");
const { newArrGames, searchApi } = require("../Utils/gamesUtils");

const allGetGames = async () => {
  const apiResult = (await axios.get(`${URL_GAMES}`)).data.results;
  const apiGames = newArrGames(apiResult);
  return apiGames;
};

const getGameName = async (name) => {
  const apiResult = (await axios.get(`${URL_GAMES}`)).data.results;
  const apiGame = newArrGames(apiResult);
  const game = searchApi(name, apiGame);
  return game;
};

const getGameIdApi = async (idGame) => {
  const response = (await axios.get(`${URL_GAME}/${idGame}?key=${API_KEY}`))
    .data;
  return newArrGames([response]);
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
  return {newGame, ...nameGender};
};

module.exports = { createGame, allGetGames, getGameName, getGameIdApi };
