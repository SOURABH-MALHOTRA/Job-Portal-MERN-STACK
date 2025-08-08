const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const authRoutes = require("./routes/auth/auth.js");
const jobCreatorRoutes = require("./routes/job-creator/index.js");


mongoose
  .connect(process.env.db_url)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.Frontend_url,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/user/",authRoutes);
app.use("/api/job-creator", jobCreatorRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to JobNest API");   })

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));