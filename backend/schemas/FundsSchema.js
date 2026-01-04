const mongoose = require("mongoose");

const FundsSchema = new mongoose.Schema({
  type: {
    type: String, // "EQUITY" or "COMMODITY"
    required: true,
    unique: true,
  },
  openingBalance: {
    type: Number,
    default: 0,
  },
  availableCash: {
    type: Number,
    default: 0,
  },
  usedMargin: {
    type: Number,
    default: 0,
  },
  availableMargin: {
    type: Number,
    default: 0,
  },
});

module.exports = FundsSchema;
