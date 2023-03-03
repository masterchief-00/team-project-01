require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const db = require("../models/index");
const User = db["User"];

passport.serializeUser((user, done) => {
  console.log("serializing user: ", user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.client_id,
      clientSecret: process.env.client_secret,
      callbackURL: "http://localhost:5000/auth/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      User.findOrCreate({
        where: { googleId: profile.id },
        defaults: {
          names: profile._json.name,
          email: profile._json.email,
        },
      }).then(function (user) {
        // console.log(user);
        return done(user);
      });
    }
  )
);
