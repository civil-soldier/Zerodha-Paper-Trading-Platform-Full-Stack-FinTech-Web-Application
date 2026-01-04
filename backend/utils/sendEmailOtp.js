const nodemailer = require("nodemailer");

const sendEmailOtp = async (email, otp) => {
  try {
    console.log("📧 Sending OTP to:", email);
    console.log("🔐 OTP:", otp);

    // 🔹 Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🔹 Send mail
    await transporter.sendMail({
      from: `"Zerodha" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Zerodha Email OTP",
      html: `
        <h2>Email Verification</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    console.log("✅ Email sent successfully");
  } catch (err) {
    console.error("❌ EMAIL SEND FAILED:", err);
    throw err; // VERY IMPORTANT
  }
};

module.exports = sendEmailOtp;
