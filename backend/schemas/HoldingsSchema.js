const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    avg: Number,
    price: Number,
    net: String,
    day: String,
  },
  { timestamps: true }
);

/**
 * ✅ USER-SAFE UNIQUE INDEX
 * Same user can't have duplicate INFY
 * Different users CAN have INFY
 */
HoldingsSchema.index({ userId: 1, name: 1 }, { unique: true });

module.exports = HoldingsSchema;
