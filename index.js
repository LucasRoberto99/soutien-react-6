const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // sinon pas de body

mongoose.connect(process.env.MONGODB_URI + "/phoenix24-soutien6");

// récupération de mes router / routes
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur mon serveur" });
});

app.use(userRouter);

app.all("*", (req, res) => {
  res.status(404).json({ message: "page not found" });
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});

// http://localhost:3000
