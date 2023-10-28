const { register, login } = require("../Function/function");

const controller = require("express").Router();

controller.post("/register", register);
controller.post("/login", login);

module.exports = controller;
