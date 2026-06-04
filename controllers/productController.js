const Product = require("../models/product");

// Get All Products
const getProduct = async (req, res) => {
  try {
    const products = await Product.find().lean();

    // Map database typo '1mage' to 'image' field for frontend display
    products.forEach(p => {
      if (!p.image && p['1mage']) {
        p.image = p['1mage'];
      }
    });

    res.status(200).json({
      success: true,
      message: "Product Fetched Successfully",
      products: products,
      Product: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProduct,
};
