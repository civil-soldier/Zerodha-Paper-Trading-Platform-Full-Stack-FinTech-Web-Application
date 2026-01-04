const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: 1,
    },
    price: {
      type: Number,
      required: true,
      min: 1, // 🔥 prevents ₹0
    },
    mode: {
      type: String,
      enum: ["BUY", "SELL"],
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "COMPLETE"],
      default: "COMPLETE",
    },
  },
  {
    timestamps: true, // 🔥 adds createdAt & updatedAt automatically
  }
);

module.exports = { OrdersSchema };
