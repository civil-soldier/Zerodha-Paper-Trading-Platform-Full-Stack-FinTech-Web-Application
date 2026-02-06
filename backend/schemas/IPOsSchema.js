const mongoose = require("mongoose");

const IPOSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    symbol: { type: String, required: true }, // e.g. SHADOWFAX
    price: { type: Number, required: true },
    lotSize: { type: Number, required: true },
    maxLots: { type: Number, default: 10 },

    openDate: { type: Date, required: true },
    closeDate: { type: Date, required: true },

    status: {
      type: String,
      enum: ["OPEN", "CLOSED", "ALLOTTED"],
      default: "OPEN",
    },
  },
  { timestamps: true },
);

module.exports = IPOSchema;
