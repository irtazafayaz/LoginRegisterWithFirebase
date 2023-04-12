import mongoose from "mongoose";
// import router from "./routes/auth";
import { readdirSync } from "fs";
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// Connect Db
mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("===> DB connected"))
  .catch((err) => console.log("!!!! DB Error => ", err));

// Write all your middlewares here
app.use(cors());
app.use(morgan("dev"));

// You have only one single route
//app.use("/api", router);

// - What if there are numerous routes files?
readdirSync("./routes").map((dir) => {
  app.use("/api", require(`./routes/${dir}`))
});

// Routes

app.listen(process.env.PORT, () => {
  console.log("===> Server Started");
});
