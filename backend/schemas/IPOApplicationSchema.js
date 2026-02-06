const mongoose = require("mongoose");

const IPOApplicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ipoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "IPO",
      required: true,
    },

    lots: { type: Number, required: true },
    totalShares: { type: Number, required: true },
    amountBlocked: { type: Number, required: true },

    status: {
      type: String,
      enum: ["APPLIED", "ALLOTTED", "REJECTED"],
      default: "APPLIED",
    },
  },
  { timestamps: true },
);

module.exports = IPOApplicationSchema;
