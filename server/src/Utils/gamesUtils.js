const newArrGames = (arr) =>
  arr.map(
    ({
      id,
      name,
      background_image,
      rating,
      platforms,
      genres,
      released,
      ratings,
      description_raw,
    }) => {
      return {
        id,
        name,
        background_image,
        rating,
        platforms,
        genres,
        released,
        ratings,
        description_raw,
      };
    }
  );

//arreglar y que traiga todas las coinsidencias
const searchApi = (nombre, arr) => {
  return arr.filter(({ name }) => name == nombre);
};

module.exports = { newArrGames, searchApi };

// https://api.rawg.io/api/platforms?key=fb314556f97a46c58e30e1230142ef30
// https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=fb314556f97a46c58e30e1230142ef30&page=2&platforms=18%2C1%2C7