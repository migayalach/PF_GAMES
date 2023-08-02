const { Router } = require("express");
const systemGameRoute = Router();

systemGameRoute.get("/", (request, response) => {
  response.status(200).send("system");
});

module.exports = systemGameRoute;
