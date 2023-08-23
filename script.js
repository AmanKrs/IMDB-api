const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
PORT = process.env.API_PORT;

app.use(express.json());
app.use(cors());

const DBconn = require("./DBConnect");

const myapi = require("./myapi");

app.listen(PORT, (err) => {
  if (err) {
    console.log("Internal Sever ERROR");
  }
  console.log("server started at", PORT);
});

DBconn();


app.use("/", myapi);
