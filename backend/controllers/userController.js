const User = require("../model/UserModel");

exports.saveDetails = async (req, res) => {
  try {
    const {
      mobile,
      dob,
      gender,
      parentName,
      pan,
      aadhaar,
      addressLine,
      city,
      state,
      pincode,
      bankAccount,
      ifsc,
    } = req.body;

    // 🔐 Validate mobile (PRIMARY KEY)
    if (!mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile number missing",
      });
    }

    // 🔍 Find user by mobile
    const user = await User.findOne({ mobile });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // 🧠 Update safely (no overwrites)
    user.personalDetails = {
      dob,
      gender,
      parentName,
    };

    user.identityDetails = {
      pan,
      aadhaar,
    };

    user.address = {
      addressLine,
      city,
      state,
      pincode,
    };

    user.bankAccount = bankAccount;
    user.ifsc = ifsc;

    // 🖼️ Attach image ONLY if uploaded
    // 🖼️ Attach image ONLY if uploaded + size validation
    if (req.file) {
      const sizeKB = req.file.size / 1024;

      // Minimum 15 KB
      if (sizeKB < 15) {
        return res.status(400).json({
          success: false,
          message: "Profile photo too small. Minimum size is 15 KB.",
        });
      }

      // Maximum 100 KB (extra safety, multer already handles this)
      if (sizeKB > 100) {
        return res.status(400).json({
          success: false,
          message: "Profile photo too large. Maximum size is 100 KB.",
        });
      }

      user.profileImage = req.file.path; // Cloudinary URL
    }

    user.signupStep = 4;

    await user.save();

    return res.json({
      success: true,
      message: "Details saved successfully",
      nextStep: "/signup/credentials",
    });
  } catch (err) {
    console.error("Save details error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to save details",
    });
  }
};
