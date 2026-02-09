const express = require("express");
const router = express.Router();
const { placeBid } = require("../controllers/gsecController");
const auth = require("../middleware/auth");
const { seedGsecs } = require("../controllers/gsecController");

router.get("/seed", seedGsecs);
router.post("/bid", auth, placeBid);

module.exports = router;
