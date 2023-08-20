const { Router } = require("express");
const postCompra = require("../Handlers/ComprasHandlers/PostCompra");
const PostCompraGame = require("../Handlers/ComprasHandlers/PostCompraGame");
const getComprasById = require("../Handlers/ComprasHandlers/getComprasById");
const getCompras = require("../Handlers/ComprasHandlers/getCompras");
const compraRoute = Router();


compraRoute.post("/", postCompra);
compraRoute.post("/Comprar", PostCompraGame);
compraRoute.get("/", getComprasById);
compraRoute.get("/sales", getCompras);

module.exports = compraRoute;

