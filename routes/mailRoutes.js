const express = require("express");
const toAllusers = require("../controllers/mailController");

const router = express.Router();

router.route("/").post(toAllusers);

module.exports = router;
