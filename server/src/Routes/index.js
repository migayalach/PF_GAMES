const { Router } = require("express");
const mainRouter = Router();

// RUTAS
const gamesRouter= require("./gamesRoute");

mainRouter.use("/juegos", gamesRouter);

module.exports = mainRouter;
