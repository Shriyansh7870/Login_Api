const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const secret_key = "shriyansh";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const array = [];
const register = async (req, res) => {
  const data = req.body;
  const userExists = array.find((item) => item.email === data.email);

  if (userExists) {
    return res
      .status(400)
      .json({ msg: "User already registered with this email" });
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  data.password = hashedPassword;

  array.push(data);
  const token = jwt.sign({ useremail: data.email }, secret_key);

  res.status(200).json({ msg: "User registered", token: token });
};

const login = async (req, res) => {
  const logindata = req.body;
  console.log(logindata);
  const user = array.find((item) => item.email === logindata.email);

  if (user) {
    const passwordMatch = await bcrypt.compare(
      logindata.password,
      user.password
    );
    if (passwordMatch) {
      return res.status(200).json({ msg: "User logged in" });
    } else {
      return res.status(401).json({ msg: "Password is wrong" });
    }
  } else {
    return res.status(404).json({ msg: "Email is wrong" });
  }
};

module.exports = { register, login };
