const { Router } = require("express");
const mainRouter = Router();

// RUTAS
const levelRouter = require("./levelRoute");
const userRouter = require("./userRoute");
const saleRouter = require("./saleRoute");
const detailRouter = require("./detailRoute");
const gendersRoute = require("./gendersRoute");
const gamesRouter = require("./gamesRoute");
const filtersRoute = require("./filtersRoute");

mainRouter.use("/level", levelRouter); //OK
mainRouter.use("/user", userRouter); //OK
mainRouter.use("/sale", saleRouter); //OK
mainRouter.use("/detail", detailRouter);
mainRouter.use("/genders", gendersRoute); //OK
mainRouter.use("/games", gamesRouter); //IN PROCESS
mainRouter.use("/filters", filtersRoute); //IN PROCESS

module.exports = mainRouter;
