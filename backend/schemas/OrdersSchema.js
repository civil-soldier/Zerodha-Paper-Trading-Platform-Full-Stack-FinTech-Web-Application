const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
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
    },

    qty: {
      type: Number,
      required: true,
      min: 1,
    },

    price: {
      type: Number,
      required: true,
      min: 1,
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
    timestamps: true,
  }
);

OrdersSchema.index({ userId: 1, createdAt: -1 });

module.exports = OrdersSchema;
