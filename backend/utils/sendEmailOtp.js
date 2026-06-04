const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailOtp = async (email, otp) => {
  try {
    console.log("📧 Sending OTP via Resend to:", email);

    const data = await resend.emails.send({
      from: "Arthiq <no-reply@mail.papertrading.site>",
      to: email,
      subject: "Your Arthiq Email OTP",
      html: `
        <h2>Email Verification</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    console.log("📨 FULL RESEND RESPONSE:");
    console.log(JSON.stringify(data, null, 2));

  } catch (err) {
    console.error("❌ RESEND OTP FAILED:");
    console.error(err);
    throw err;
  }
};

module.exports = sendEmailOtp;