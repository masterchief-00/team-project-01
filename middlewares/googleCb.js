const passport = require("passport");

const googleCb = passport.authenticate("google", {
  failureRedirect: "/auth",
});

module.exports = {
  googleCb,
};
