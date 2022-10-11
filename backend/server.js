const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

//import routes

//middleware
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;
const DB_URL =
  "mongodb+srv://Nishan:nisha888@registrationcluster.7zn38ty.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => console.log("Database connection error", err));

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
