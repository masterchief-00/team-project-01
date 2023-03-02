const db = require("../models/index");
const User = db["User"];
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  let allUsers = await User.findAll();

  if (!allUsers) res.status(400).json({ message: "No users found" });

  res.json(allUsers);
};

const createNewUser = async (req, res) => {
  let hashedPWd = await bcrypt.hash(req.body.password, 10);
  console.log(req.body);
  try {
    const instance = await User.create({
      names: req.body.names,
      email: req.body.email,
      password: hashedPWd,
    });

    res.json({ message: "User created" });
  } catch (err) {
    res.status(400).json(err);
  }
};

const findUser = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "user id is required" });

  User.findOne({
    where: { email: req.params.id },
  })
    .then((foundResult) => {
      return res.json(foundResult);
    })
    .catch((err) => {
      console.log(err);
      return res.status.json({ message: "User not found" });
    });
};


const deleteUser = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "user id is required" });

  User.findOne({
    where: { email: req.params.id },
  })
    .then(async (foundResult) => {
      await foundResult.destroy();

      return res.json({ message: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      return res.status.json({ message: "User not found" });
    });
};
module.exports = { getAllUsers, createNewUser, findUser, deleteUser};







