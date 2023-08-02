const { Router } = require("express");
const levelRouter = Router();

levelRouter.get("/", (request, response) => {
  response.status(200).send("level");
});

module.exports = levelRouter;
