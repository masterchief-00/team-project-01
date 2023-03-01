const express = require("express");
const {
  getAllUsers,
  createNewUser,
  findUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createNewUser);

router.route("/:id").get(findUser).delete(deleteUser);

module.exports = router;
