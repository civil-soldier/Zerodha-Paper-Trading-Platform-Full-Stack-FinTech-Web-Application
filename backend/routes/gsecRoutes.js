const express = require("express");
const router = express.Router();
const { placeBid } = require("../controllers/gsecController");
const auth = require("../middleware/auth");

router.post("/bid", auth, placeBid);

module.exports = router;
