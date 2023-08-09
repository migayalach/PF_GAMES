const { Router } = require("express");
const postCompra = require("../Handlers/ComprasHandlers/PostCompra");
const PostCompraGame = require("../Handlers/ComprasHandlers/PostCompraGame");
const getComprasById = require("../Handlers/ComprasHandlers/getComprasById");
const compraRoute = Router();


compraRoute.post("/", postCompra);
compraRoute.post("/Comprar", PostCompraGame);
compraRoute.get("/", getComprasById);

module.exports = compraRoute;

