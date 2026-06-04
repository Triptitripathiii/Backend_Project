const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect(
    //   "mongodb+srv://TriptiMongo:Welcome%4020266@cluster0.i18uh3i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // );
    await mongoose.connect(
      "mongodb+srv://TriptiMongo:Welcome%4020266@cluster0.i18uh3i.mongodb.net/ecommerceDB?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;