const express = require("express");
const {
  getAllUsers,
  createNewUser,
  findUser,
  sendEmail,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createNewUser);

router.route("/send-email").post(sendEmail);

router.route("/:id").get(findUser).delete(deleteUser);

module.exports = router;
