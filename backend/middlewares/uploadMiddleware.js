const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// ☁️ Cloudinary storage config
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "zerodha_profiles",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

// 🛡️ Multer config with size + type protection
const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024, // ✅ 100 KB max
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(
        new Error("Only image files are allowed"),
        false
      );
    }
    cb(null, true);
  },
});

module.exports = upload;
