require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const userRoutes = require("./routes/userRoutes");
const mailRoutes = require("./routes/mailRoutes");
const { googleCb } = require("./middlewares/googleCb");
const User = require("./models/User");
var jwt = require("jsonwebtoken");

require("./config/passport");

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SEKRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
  res.send("<button><a href='/auth'>Login With Google</a></button>");
});

app.get(
  "/auth",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/google/success",
    failureRedirect: "/auth",
  })
);

app.get("auth/google/success", async (req, res) => {
  console.log(req.user);
  const { names, email } = req.user;
  const userExists = await User.findOne({ where: { email } });
  let userObj = {};
  if (userExists) {
    let token = jwt.sign(
      {
        names: name,
        email: email,
      },
      process.env.JWT_SEKRET
    );
    await User.update({ token: token }, { where: { email: email } });
    userObj = { ...userExists };
  }
  res.json({ userObj });
});

app.use("/users", userRoutes);
app.use("/email", mailRoutes);

module.exports = app;
