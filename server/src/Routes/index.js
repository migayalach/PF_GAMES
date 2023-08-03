const { Router } = require("express");
const mainRouter = Router();

// RUTAS
const levelRouter = require("./levelRoute");
const userRouter = require("./userRoute");
const saleRouter = require("./saleRoute");
const detailRouter = require("./detailRoute");
const platformsRouter = require("./platformsRoute");
const gendersRoute = require("./gendersRoute");
const gamesRouter = require("./gamesRoute");

mainRouter.use("/level", levelRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/sale", saleRouter);
mainRouter.use("/detail", detailRouter);
mainRouter.use("/plataforms", platformsRouter);    //OK
mainRouter.use("/genders", gendersRoute);
mainRouter.use("/games", gamesRouter);

module.exports = mainRouter;

// mainRouter.use("/systemGame", systemGameRoute); // YA NO VA
// const systemGameRoute = require("./systemGameRoute");