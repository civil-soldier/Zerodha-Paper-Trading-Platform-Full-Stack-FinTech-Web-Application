const express = require("express");
const router = express.Router();
const { applyIPO } = require("../controllers/ipoController");
const auth = require("../middlewares/authMiddleware");

router.post("/apply", auth, applyIPO);

module.exports = router;
