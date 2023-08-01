const newArrGames = (arr) =>
  arr.map(({ id, name, genres, released, platforms, ratings }) => {
    return {
      id,
      name,
      genres,
      released,
      platforms,
      ratings,
    };
  });

//arreglar y que traiga todas las coinsidencias
const searchApi = (nombre, arr) => {
  return arr.filter(({ name }) => name == nombre);
};

module.exports = { newArrGames, searchApi };
