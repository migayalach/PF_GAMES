const { Router } = require("express");
const { getGames, getGameId } = require("../Handlers/gamesHandlers");
const gamesRouter = Router();

gamesRouter.get("/", getGames);
gamesRouter.get("/:idGame", getGameId);

module.exports = gamesRouter;
