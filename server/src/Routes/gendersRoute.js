const { Router } = require("express");
const {
  postGenders,
  getGenders,
  getGendersId,
  putGenders,
  deleteGender,
} = require("../Handlers/gendersHandlers");
const gendersRoute = Router();

gendersRoute.get("/", getGenders);
gendersRoute.get("/:idGenders", getGendersId);
gendersRoute.post("/", postGenders);
gendersRoute.put("/", putGenders);
gendersRoute.delete("/:idGenders", deleteGender);

module.exports = gendersRoute;
