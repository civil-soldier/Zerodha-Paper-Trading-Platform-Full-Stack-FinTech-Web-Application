const mongoose = require("mongoose");

const GsecApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  gsecId: { type: mongoose.Schema.Types.ObjectId, ref: "Gsec" },

  investmentAmount: Number,   // ₹1600
  units: Number,              // investmentAmount / pricePerUnit

  status: {
    type: String,
    enum: ["APPLIED", "ALLOTTED", "REJECTED"],
    default: "APPLIED"
  }

}, { timestamps: true });

module.exports = GsecApplicationSchema;
