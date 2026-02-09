const mongoose = require("mongoose");
const GsecsSchema = require("../schemas/GsecsSchema");

module.exports = mongoose.model("Gsec", GsecsSchema);
