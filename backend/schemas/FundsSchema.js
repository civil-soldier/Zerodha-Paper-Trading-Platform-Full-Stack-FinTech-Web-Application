const mongoose = require("mongoose");
const { Schema } = mongoose;

const FundsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    type: {
      type: String, // "EQUITY" or "COMMODITY"
      required: true,
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
  },
  { timestamps: true }
);

/**
 * 🔐 One fund type per user
 */
FundsSchema.index({ userId: 1, type: 1 }, { unique: true });

module.exports = FundsSchema;
