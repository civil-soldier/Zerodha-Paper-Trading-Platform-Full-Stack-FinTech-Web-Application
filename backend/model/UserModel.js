const mongoose = require("mongoose");
const UserSchema = require("../schemas/UserSchema");

module.exports =
  mongoose.models.User || mongoose.model("User", UserSchema);
