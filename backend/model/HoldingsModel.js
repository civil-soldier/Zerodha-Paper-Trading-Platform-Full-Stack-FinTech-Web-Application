const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema");

const HoldingsModel = mongoose.model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };
