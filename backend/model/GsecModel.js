const mongoose = require("mongoose");
const GsecSchema = require("../schemas/GsecSchema");

module.exports = mongoose.model("Gsec", GsecSchema);
