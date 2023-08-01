const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./Routes");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/gaming", mainRouter);

module.exports = app;