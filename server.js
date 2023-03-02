require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const mailRoutes = require("./routes/mailRoutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/email", mailRoutes);

module.exports = app;
