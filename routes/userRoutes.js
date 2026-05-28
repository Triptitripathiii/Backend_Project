const express = require("express");

const router = express.Router();

const {
  registerUser,
  getUsers,
} = require("../controllers/userController");

// GET Users
router.get("/", getUsers);

// Register User
router.post("/register", registerUser);

module.exports = router;