const express = require("express");
const userRouter = require("./Routing/userRouter");
const auth = require("./CategoryRontroller/Auth/Authon");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRouter);
app.get("/api", auth, (req, res) => {
  res.send("Home page");
});
app.listen(4000, () => {
  console.log(`Server is running fine`);
});
