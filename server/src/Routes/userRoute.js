const { Router } = require("express");
const {
  postUser,
  getUser,
  getUserId,
  putUser,
  deleteUser,
} = require("../Handlers/userHandlers");
const userRouter = Router();

userRouter.get("/", getUser);
userRouter.get("/:idUser", getUserId);
userRouter.post("/", postUser);
userRouter.put("/", putUser);
userRouter.delete("/:idUser", deleteUser);


module.exports = userRouter;
