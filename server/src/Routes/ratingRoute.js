const { Router } = require("express");
const getRating = require("../Handlers/ratingHandlers/getRatings");
const postRating = require("../Handlers/ratingHandlers/postRating");
const updateRating = require("../Handlers/ratingHandlers/updateRating");
const ratingRoute = Router();

ratingRoute.get("/", getRating);
ratingRoute.post("/", postRating);
ratingRoute.put("/", updateRating);

module.exports = ratingRoute;