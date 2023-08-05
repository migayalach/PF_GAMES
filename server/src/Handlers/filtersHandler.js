const SUCCESS = 200;
const ERROR = 400;
const { filterByGender, filterByPrice, filtersGames } = require('../Controllers/filtersController');

const getFilters = async (request, response) => {
  const { gender, minPrice, maxPrice } = request.query;
  let games;
  try {
    if (!gender && minPrice && maxPrice) {
      games = await filterByPrice(+minPrice, +maxPrice);
    } else if (gender && !minPrice && !maxPrice) {
      games = await filterByGender(gender);
    } else {
      games = await filtersGames(gender, +minPrice, +maxPrice);
    }
    response.status(SUCCESS).json(games);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
}

module.exports = { getFilters };