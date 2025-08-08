const express = require("express");
const router = express.Router();
const {registerUser,loginUser,logoutUser, authMiddleware} = require("../../controllers/auth/auth.js");

// Register route
router.post("/register", registerUser);
// Login route
router.post("/login", loginUser);
// Logout route                             
router.post("/logout", logoutUser);             
// Auth middleware route
router.get("/middleware", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "User authenticated successfully",
    user: {
      id: req.user.id,
      email: req.user.email,
      role: req.user.role,
      userName: req.user.userName,
    },
  });
});                 
// Export the router
module.exports = router;