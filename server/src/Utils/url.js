require("dotenv").config();
const { API_KEY } = process.env;
const URL_PLATFORMS = `https://api.rawg.io/api/platforms?key=${API_KEY}`;
const URL_GAMES = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;

module.exports = { URL_PLATFORMS, URL_GAMES };
