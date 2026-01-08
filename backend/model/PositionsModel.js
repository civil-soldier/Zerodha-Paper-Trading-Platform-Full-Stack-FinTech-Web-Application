const mongoose = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");

const PositionsModel = mongoose.model("Position", PositionsSchema);

module.exports = { PositionsModel };
