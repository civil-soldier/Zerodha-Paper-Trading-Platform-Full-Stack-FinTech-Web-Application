const express = require("express");
const router = express.Router();
const { placeBid , seedGsecs , getAllGsecs } = require("../controllers/gsecController");
const auth = require("../middlewares/authMiddleware");

router.get("/seed", seedGsecs);
router.get("/all", getAllGsecs);
router.post("/bid", auth, placeBid);

module.exports = router;