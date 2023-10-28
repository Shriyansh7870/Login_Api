const express = require("express");
const cors = require("cors");
const controller = require("./Controller/Controller");
const home = require("./Controller/Home");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api", controller);
app.use("/", home);

app.listen(4000, () => {
  try {
    console.log("Running on 4000");
  } catch (err) {
    console.log("Error", err);
  }
});
