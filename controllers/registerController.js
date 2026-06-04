const User = require("../models/User");

const postregister = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      message: "Registered Successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  postregister,
};