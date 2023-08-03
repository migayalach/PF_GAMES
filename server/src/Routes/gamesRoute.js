const { Router } = require("express");
const {
  getGames,
  getGameId,
  postGame,
  putGame,
  deleteGame,
} = require("../Handlers/gamesHandlers");
const gamesRouter = Router();

gamesRouter.get("/", getGames);
gamesRouter.get("/:idGame", getGameId);
gamesRouter.post("/", postGame);
gamesRouter.put("/", putGame);
gamesRouter.delete("/:idGame", deleteGame);

module.exports = gamesRouter;
