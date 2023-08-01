const { Router } = require("express");
const gamesRouter = Router();
const { getGames } = require("../Handlers/gamesHandlers");

gamesRouter.get("/", getGames);

module.exports = gamesRouter;
