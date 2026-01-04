const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingsSchema = new Schema({
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
});

/**
 * 🔐 HARD SAFETY INDEX
 */
HoldingsSchema.index(
  { name: 1 },
  {
    unique: true,
    partialFilterExpression: {
      name: { $type: "string", $ne: "" }
    }
  }
);

module.exports = HoldingsSchema;
