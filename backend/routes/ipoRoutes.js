const express = require("express");
const router = express.Router();
const { applyIPO, getAllIPOs } = require("../controllers/ipoController");
const auth = require("../middlewares/authMiddleware");

router.get("/", getAllIPOs);   //  IPO LIST ROUTE
router.post("/apply", auth, applyIPO);

module.exports = router;
