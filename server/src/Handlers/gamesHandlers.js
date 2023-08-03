const SUCCESS = 200;
const ERROR = 400;
const {
  allGetGames,
  getGameName,
  getGameIdApi,
} = require("../Controllers/gamesController");

const getGames = async (request, response) => {
  const { name } = request.query;
  try {
    const result = name ? await getGameName(name) : await allGetGames();
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getGameId = async (request, response) => {
  const { idGame } = request.params;
  try {
    const game = await getGameIdApi(idGame);
    response.status(SUCCESS).json(game);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const postGame = (request, response) => {
  try {
    response.status(SUCCESS).send("creando game");
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putGame = (request, response) => {
  try {
    response.status(SUCCESS).send("editando game");
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteGame = (request, response) => {
  try {
    response.status(SUCCESS).send("eliminando game");
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { getGames, getGameId, postGame, putGame, deleteGame };
