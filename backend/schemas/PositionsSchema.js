const { Schema } = require("mongoose");

const PositionsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
  },
  { timestamps: true }
);

PositionsSchema.index({ userId: 1, name: 1 });

module.exports = PositionsSchema;
