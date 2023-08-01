const axios = require("axios");
const { URL_GAMES, URL_PLATFORMS } = require("../Utils/url");
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

module.exports = { allGetGames, getGameName };
