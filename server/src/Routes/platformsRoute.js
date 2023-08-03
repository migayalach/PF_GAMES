const { Router } = require("express");
const {
  getPlatforms,
  getPlatformsId,
  postPlatforms,
  putPlatforms,
  deletePlatforms,
} = require("../Handlers/platformsHandlers");

const platformsRouter = Router();

platformsRouter.get("/", getPlatforms);
platformsRouter.get("/:idPlatforms", getPlatformsId);
platformsRouter.post("/", postPlatforms);
platformsRouter.put("/", putPlatforms);
platformsRouter.delete("/:idPlatforms", deletePlatforms);

module.exports = platformsRouter;
