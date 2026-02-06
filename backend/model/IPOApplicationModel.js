const mongoose = require("mongoose");
const IPOApplicationSchema = require("../schemas/IPOApplicationSchema");

module.exports = mongoose.model("IPOApplication", IPOApplicationSchema);
