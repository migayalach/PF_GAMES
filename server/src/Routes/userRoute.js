const { Router } = require("express");
const userRouter = Router();

userRouter.get("/", (request, response) => {
  response.status(200).send("user");
});

module.exports = userRouter;
