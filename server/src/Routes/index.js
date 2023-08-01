const { Router } = require("express");
const mainRouter = Router();

mainRouter.use("/juegos", (request, response) => {
  response.status(200).send(":D");
});

module.exports = mainRouter;
