const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;

const DBconn = async () => {
  try {
    await mongoose.connect(url);
    console.log("db connected");
  } catch (e) {
    console.log("DB_ERROR:", e.message);
  }
};

module.exports = DBconn;
