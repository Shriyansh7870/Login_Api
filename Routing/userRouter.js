const { register, login } = require("../CategoryRontroller/UserController");
const userRouter = require("express").Router();
userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = userRouter;
