const mongoose = require("mongoose");
const GsecApplicationSchema = require("../schemas/GsecApplicationSchema");

module.exports = mongoose.model("GsecApplication", GsecApplicationSchema);
