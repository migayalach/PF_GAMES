const { Router } = require("express");
const {
  postSale,
  getSale,
  getSaleId,
  putSale,
  deleteSale,
} = require("../Handlers/saleHandlers");
const saleRouter = Router();

saleRouter.get("/", getSale);
saleRouter.get("/:idSale", getSaleId);      
saleRouter.post("/", postSale);
saleRouter.put("/", putSale);
saleRouter.delete("/:idSale", deleteSale);

module.exports = saleRouter;
