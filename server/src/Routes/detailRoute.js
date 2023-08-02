const { Router } = require("express");
const detailRouter = Router();

detailRouter.get("/", (request, response) => {
  response.status(200).send("detail");
});

module.exports = detailRouter;
