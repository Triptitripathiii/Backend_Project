const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// User Routes
app.use("/api/users", userRoutes);

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});