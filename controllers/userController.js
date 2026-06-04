const User = require("../models/User");

// Register User


const registerUser = async (req, res) => {
  try {
    console.log("BODY =>", req.body);

    const user = await User.create(req.body);

    console.log("USER SAVED =>", user);

    res.status(201).json({
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log("FULL ERROR =>", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      message: "Users Fetched Successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  getUsers,
};



module.exports = {
  registerUser,
  getUsers,
};