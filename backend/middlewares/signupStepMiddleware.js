const User = require("../model/UserModel");

const signupStepMiddleware = (requiredStep) => {
  return async (req, res, next) => {
    try {
      const { mobile } = req.body;

      if (!mobile) {
        return res.status(400).json({
          message: "Mobile required for signup flow",
        });
      }

      const user = await User.findOne({ mobile });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      if (user.signupStep < requiredStep) {
        return res.status(403).json({
          message: "Complete previous signup steps first",
        });
      }

      req.user = user;
      next();
    } catch (err) {
      res.status(500).json({
        message: "Signup step validation failed",
      });
    }
  };
};

module.exports = signupStepMiddleware;
