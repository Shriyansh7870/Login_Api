const express = require("express");
const userRouter = require("./Routing/userRouter");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", userRouter);
app.listen(4000, () => {
  console.log(`Server is running fine`);
});
