const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;
