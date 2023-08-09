const SUCCESS = 200;
const ERROR = 400;
const {
  createGame,
  updateGame,
  allGetGames,
  getGameName,
  getGamesId,
  delGame,
} = require("../Controllers/gamesController");
const { Sequelize } = require("sequelize");
const {Game} = require('../DataBase/dataBase');


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
  const typeData = isNaN(+idGame) ? "string" : "number";
  try {
    const game = await getGamesId(idGame, typeData);
    response.status(SUCCESS).json(game);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getGameBySearch = async(req, res) => {
  try {
    const {search} = req.query
    
  } catch (error) {
    res.status(ERROR).json({error: error.message})
  }
}

const postGame = async (request, response) => {
  const { namesGenders, nameGame, image, cost, description } =
    request.body;
  try {
    const newGame = await createGame(
      nameGame,
      image,
      cost,
      description,
      namesGenders
    );
    response.status(SUCCESS).json(newGame);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const putGame = async (request, response) => {
  const {
    idGame,
    nameGame,
    image,
    cost,
    description,
    namesGenders,
  } = request.body;
  try {
    const editInfoGame = await updateGame(
      idGame,
      nameGame,
      image,
      cost,
      description,
      namesGenders,
    );
    response.status(SUCCESS).json(editInfoGame);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteGame = async (request, response) => {
  const { idGame } = request.params;
  try {
    const dataResponse = await delGame(idGame);
    response.status(SUCCESS).json(dataResponse);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { getGames, getGameId, postGame, putGame, deleteGame };


// {
//   "idPlatforms": "d0649d94-b29b-4015-a423-c55f33f97fe1", 
//   "nameGame":"Aventuras de vida", 
//   "image":"http:google.com", 
//   "cost":"50", 
//   "description":"es un juego de aventuras",
//   "nameGenders": ["actions", "arcade", "shooter"]
// }
