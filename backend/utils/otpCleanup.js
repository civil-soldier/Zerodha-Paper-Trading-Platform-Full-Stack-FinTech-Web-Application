const UserModel = require("../model/UserModel");


const cleanupExpiredOtps = async () => {
  await UserModel.updateMany(
  { emailOtpExpiry: { $lt: new Date() } },
  { $unset: { emailOtp: 1, emailOtpExpiry: 1 } }
);
};

module.exports = cleanupExpiredOtps;
