const mongoose = require("mongoose");
const IPOSchema = require("../schemas/IPOsSchema");

module.exports = mongoose.model("IPO", IPOSchema);
