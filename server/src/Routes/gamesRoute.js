const { Router } = require("express");
const {
  getGames,
  getGameId,
  postGame,
  putGame,
  deleteGame,
} = require("../Handlers/gamesHandlers");
const gamesRouter = Router();

gamesRouter.get("/", getGames);             //OK
gamesRouter.get("/:idGame", getGameId);     //OK
gamesRouter.post("/", postGame);            //OK
gamesRouter.put("/", putGame);              //
gamesRouter.delete("/:idGame", deleteGame); //OK

module.exports = gamesRouter;
