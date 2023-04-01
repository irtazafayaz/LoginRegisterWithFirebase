const express = require("express");
import mongoose from "mongoose";
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

app.use(cors());
app.use(morgan("dev"));

app.get("/api/:message", (req, res) => {
  res.json({
    message: `Hello - ${req.params.message}`,
  });
});

app.listen(process.env.PORT, () => {
  console.log("===> Server Started");
});
