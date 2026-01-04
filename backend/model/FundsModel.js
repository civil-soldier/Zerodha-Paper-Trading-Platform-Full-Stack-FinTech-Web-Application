const mongoose = require("mongoose");
const FundsSchema = require("../schemas/FundsSchema");

const FundsModel = mongoose.model("funds", FundsSchema);

module.exports = { FundsModel };
