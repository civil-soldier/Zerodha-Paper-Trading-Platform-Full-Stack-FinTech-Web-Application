const mongoose = require("mongoose");

const GsecsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, default: "GSEC" },
  couponRate: { type: Number, required: true },
  indicativeYield: { type: Number, required: true },
  pricePerUnit: { type: Number, required: true },
  maturityDate: { type: Date, required: true },
  minInvestment: { type: Number, required: true },
  biddingEndDate: { type: Date, required: true },
  status: { type: String, enum: ["OPEN", "CLOSED"], default: "OPEN" }
}, { timestamps: true });

module.exports = GsecsSchema;
