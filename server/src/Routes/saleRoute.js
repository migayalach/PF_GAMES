const { Router } = require("express");
const saleRouter = Router();

saleRouter.get("/",(request, response) => {
    response.status(200).send("sale");
  });

module.exports = saleRouter;
