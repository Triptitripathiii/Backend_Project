const express = require("express");

const router = express.Router();

const {
  getProduct,
//   registerProduct,
} = require("../controllers/productController");

// Get Products
router.get("/", getProduct);

// Add Product
// router.post("/", registerProduct);

module.exports = router;