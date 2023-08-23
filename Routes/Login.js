const express = require("express");
const router = express.Router();
const Users = require("../Schema/UserSchema");

router.post("/signUp", async (req, res) => {
  const user = new Users(req.body);

  const addUser = await user.save();

  if (addUser) {
    res.status(200).send({ msg: "User Register Successfully" });
  } else {
    res.status(403).send({ msg: "Unable to Register User " });
  }

  res.end();
});

router.post("/signIn", async (req, res) => {
  console.log(req.body);

  const { userId, password } = req.body; //variable name must be same as the req.body have
  console.log(userId, password);

  const userExist = await Users.findOne({ userId: userId });

  if (userExist) {
    if (userExist.password == password) {
      res.status(200).send({ msg: "User Successfully Loggedin" });
    } else {
      res.status(401).send({ msg: "Username or Passowrd incorrect" });
    }
  } else {
    res.status(403).send({ msg: "Unable find  User " });
  }

  res.end();
});

module.exports = router;
