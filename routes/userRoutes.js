// const express = require("express");

// const router = express.Router();

// const {
//   registerUser,
//   getUsers,
// } = require("../controllers/userController");

// // GET Users
// router.get("/", getUsers);

// // Register User
// router.post("/register", registerUser);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  registerUser,
  getUsers,
} = require("../controllers/userController");

router.get("/", getUsers);

// GET helper for browser testing
router.get("/register", (req, res) => {
  res.status(200).json({
    message: "Registration endpoint is active! Please send a POST request with 'name', 'email', and 'password' to register.",
  });
});

router.post("/register", registerUser);

module.exports = router;