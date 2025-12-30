const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("../server/config/database");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());   
app.use(cors());


connectDB();


app.use("/", authRoutes);


app.listen(5000, () => console.log("Server running on port 5000"));
