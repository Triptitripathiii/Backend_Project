const express = require("express");
const router = express.Router();

const {
  postregister,
} = require("../controllers/registerController");

// GET all registrations

// POST create a new registration
router.post("/", postregister);

module.exports = router;