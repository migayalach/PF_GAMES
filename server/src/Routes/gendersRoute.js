const { Router } = require("express");
const gendersRoute = Router();

gendersRoute.get("/", (request, response) => {
  response.status(200).send("gendersRoute");
});

module.exports = gendersRoute;
