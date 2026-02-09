const express = require("express");
const router = express.Router();
const { placeBid , seedGsecs } = require("../controllers/gsecController");
const auth = require("../middlewares/authMiddleware");

router.get("/seed", seedGsecs);
router.post("/bid", auth, placeBid);

module.exports = router;