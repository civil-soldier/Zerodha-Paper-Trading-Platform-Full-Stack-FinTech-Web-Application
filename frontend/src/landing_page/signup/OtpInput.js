import React, { useRef } from "react";

function OtpInput({ otp, setOtp }) {
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div style={otpContainer}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={otpBox}
        />
      ))}
    </div>
  );
}

const otpContainer = {
  display: "flex",
  gap: "12px",
  marginTop: "20px",
};

const otpBox = {
  width: "44px",
  height: "52px",
  fontSize: "20px",
  textAlign: "center",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default OtpInput;
