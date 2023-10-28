const storeData = [];

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const secrete_key = "pradum";

const register = (req, res) => {
  const data = req.body;
  console.log(data);
  const detail = storeData.find((item) => {
    if (item.email === data.email) {
      return item;
    }
  });
  if (detail) {
    return res.send({ msg: "User already register with this acount" });
  }

  const hashData = bcrypt.hashSync(data.password, 10);

  const tempObject = {
    name: data.name,
    email: data.email,
    mob: data.mob,
    password: hashData,
  };

  storeData.push(tempObject);
  console.log(storeData);
  const token = jwt.sign({ useremail: data.email }, secrete_key, {
    expiresIn: "50000",
  });
  console.log(token);

  res.send({ msg: "User Register", token: token });
};

const login = (req, res) => {
  const data = req.body;

  const detail1 = storeData.find((item) => {
    if (item.email === data.email) {
      return item;
    }
  });

  if (detail1) {
    const validate = bcrypt.compareSync(data.password, details2.password);

    const token = jwt.sign({ useremail: data.email }, secrete_key, {
      expiresIn: "360000",
    });
    console.log(token);

    if (validate) {
      return res.send({ msg: " User Login Successfully", token: token });
    } else {
      return res.send({ msg: "Password Is Wrong" });
    }
  } else {
    return res.send({ msg: "Email Is Wrong" });
  }
};

module.exports = { register, login };
