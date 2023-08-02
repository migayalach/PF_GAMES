const { Router } = require("express");
const mainRouter = Router();

// RUTAS
const levelRouter = require("./levelRoute");
const userRouter = require("./userRoute");
const saleRouter = require("./saleRoute");
const detailRouter = require("./detailRoute");
const systemGameRoute = require("./systemGameRoute");
const plataformsRoute = require("./plataformsRoute");
const gendersRoute = require("./gendersRoute");
const gamesRouter = require("./gamesRoute");

mainRouter.use("/level", levelRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/sale", saleRouter);
mainRouter.use("/detail", detailRouter);
mainRouter.use("/systemGame", systemGameRoute);
mainRouter.use("/plataforms", plataformsRoute);
mainRouter.use("/genders", gendersRoute);
mainRouter.use("/games", gamesRouter);

module.exports = mainRouter;
