const jwt = require("jsonwebtoken");
const secret_key = "shriyansh";

const auth = (req, res, next) => {
  const BearerToken = req.headers["authorization"];

  if (BearerToken) {
    const token = BearerToken.split(" ")[1];
    try {
      const validate = jwt.verify(token, secret_key);
      if (validate) {
        next();
      } else {
        return res.send({ msg: "User not authorized" });
      }
    } catch (error) {
      return res.send({ msg: "Token is expired" });
    }
  } else {
    return res.send({ msg: "User not allowed" });
  }
};

module.exports = auth;
