const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRouter = require("./routes/loginRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.use("/api/users", userRoutes);
app.use("/api/login", loginRouter);
app.use("/api/products", productRoutes);
app.use("/api/register", registerRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});