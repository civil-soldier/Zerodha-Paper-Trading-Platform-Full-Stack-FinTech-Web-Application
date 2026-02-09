const mongoose = require("mongoose");

const GsecSchema = new mongoose.Schema({
  name: { type: String, required: true },           // "7.24% GS 2055"
  type: { type: String, default: "GSEC" },

  couponRate: { type: Number, required: true },     // 7.24
  indicativeYield: { type: Number, required: true },// 7.40 (list me dikhane ke liye)

  pricePerUnit: { type: Number, required: true },   // ₹106
  maturityDate: { type: Date, required: true },     // 06 Oct 2035

  minInvestment: { type: Number, required: true },  // ₹1000 etc
  biddingEndDate: { type: Date, required: true },

  status: { 
    type: String, 
    enum: ["OPEN", "CLOSED"], 
    default: "OPEN" 
  }

}, { timestamps: true });

module.exports = GsecSchema;
