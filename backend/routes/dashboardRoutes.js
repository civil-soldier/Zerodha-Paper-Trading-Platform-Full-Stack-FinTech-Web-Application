const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// 🔒 PROTECTED ROUTES

router.get("/profile",authMiddleware, verifyToken, (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
});

router.get("/holdings", authMiddleware, verifyToken, async (req, res) => {
  // later holdings logic
  res.json({
    success: true,
    message: "Holdings data",
    user: req.user.username,
  });
});

router.get("/positions", authMiddleware, verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "Positions data",
  });
});

router.get("/funds", authMiddleware, verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "Funds data",
  });
});

module.exports = router;
