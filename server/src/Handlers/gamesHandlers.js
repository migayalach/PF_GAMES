const SUCCESS = 200;
const ERROR = 400;
const { allGetGames, getGameName } = require("../Controllers/gamesController");

const getGames = async (request, response) => {
  const { name } = request.query;
  try {
    const result = name ? await getGameName(name) : await allGetGames();
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { getGames };
