const { Router } = require("express");
const {
  postLevel,
  getLevel,
  getLevelId,
  putLevel,
  deleteLevel,
} = require("../Handlers/levelHandlers");
const levelRouter = Router();

levelRouter.get("/", getLevel);
levelRouter.get("/:idLevel", getLevelId);
levelRouter.post("/", postLevel);
levelRouter.put("/", putLevel);
levelRouter.delete("/:idLevel", deleteLevel);

module.exports = levelRouter;
