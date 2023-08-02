const { Router } = require("express");
const plataformsRoute = Router();

plataformsRoute.get("/", (request, response) => {
  response.status(200).send("plataform");
});

module.exports = plataformsRoute;
