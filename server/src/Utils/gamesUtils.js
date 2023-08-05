const axios = require("axios");
const { URL_GAME, API_KEY } = require("./url");

const newArrGames = (arr) =>
  arr.map(
    ({
      name_original,
      background_image,
      description_raw,
      genres
    }) => {
      return {
        name: name_original,
        background_image,
        description_raw,
        genres
      };
    }
  );

const deleteTagsHTML = (texto) => {
  // Expresión regular para buscar etiquetas HTML
  const regex = /<[^>]+>/g;
  // Reemplaza todas las etiquetas HTML con una cadena vacía
  const textoLimpio = texto.replace(regex, "");
  return textoLimpio;
}

const randomPrice = () => {
  const random = Math.random();
  const numRange = 40 + random * (200 - 40);
  const dosDecimales = Number(numRange.toFixed(2));
  return dosDecimales;
}

const newGameId = async (idGame) => {
  const { data } = await axios.get(`${URL_GAME}/${idGame}?key=${API_KEY}`);
  const newGame = {
    nameGame: data.name_original,
    description: deleteTagsHTML(data.description),
    image: data.background_image,
    cost: randomPrice(),
    genders: data.genres
  }
  return newGame;
}

//arreglar y que traiga todas las coinsidencias
const searchApi = (nombre, arr) => {
  return arr.filter(({ name }) => name == nombre);
};

const resCreateGame = (
  { idPlatforms, nameGame, image, cost, description },
  namePlatf,
  gender
) => {
  console.log(
    { idPlatforms, nameGame, image, cost, description },
    namePlatf,
    gender
  );
  const obj = {
    namePlatf,
    nameGame,
    image,
    cost,
    nameGender: gender,
    description,
  };
  return [obj];
};

module.exports = { newArrGames, searchApi, resCreateGame, newGameId };

// https://api.rawg.io/api/platforms?key=fb314556f97a46c58e30e1230142ef30
// https://api.rawg.io/api/games?dates=2019-09-01%2C2019-09-30&key=fb314556f97a46c58e30e1230142ef30&page=2&platforms=18%2C1%2C7
