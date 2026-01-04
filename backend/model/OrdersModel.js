const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = mongoose.model("orders", OrdersSchema);

module.exports = { OrdersModel };
