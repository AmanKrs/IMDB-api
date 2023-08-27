const express = require("express");
const router = express.Router();
const Users = require("../Schema/UserSchema");

router.post("/signup", async (req, res) => {
  const { userId, Name, email, password } = req.body;
  if (userId == null || Name == null || password == null || email == null) {
    res.status(403).send({ msg: "enter detail" });
  } else {
    const userAlreadyExist = await Users.findOne({ userId: userId });

    if (userAlreadyExist) {
      res.status(409).send({ msg: "User Already Present " });
    } else {
      const user = new Users(req.body);

      const addUser = await user.save();

      if (addUser) {
        res.status(200).send({ msg: "User Register Successfully" });
      } else {
        res.status(406).send({ msg: "Unable to Register User " });
      }
    }
  }
  res.end();
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body; //variable name must be same as the req.body have
  console.log(req.body.password);
  if (password == null || email == null) {
    res.status(403).send({ msg: "enter detail" });
  } else {
    const userExist = await Users.findOne({ email: email });

    if (userExist) {
      if (userExist.password == password) {
        res.status(200).send({ msg: "User Successfully Loggedin" });
      } else {
        res.status(401).send({ msg: "Username or Passowrd incorrect" });
      }
    } else {
      res.status(404).send({ msg: "Unable find  User " });
    }
  }
  res.end();
});

module.exports = router;
