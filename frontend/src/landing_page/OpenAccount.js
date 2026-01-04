import React, { useState } from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {

  const [hover, setHover] = useState(false);

  const scrollToPhoneSection = () => {
  const el = document.getElementById("signup-phone-section");
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};


  return (
    <div className="container p-5 mb-5">
      <div className="row text-center d-flex flex-column align-items-center">
        <h1 className="mt-5" style={{ fontWeight: 500, fontSize: "25px" }}>
          Open a Zerodha account
        </h1>

        <p
          className="mt-3"
          style={{ fontSize: "18px", color: "#555", letterSpacing: "0.3px" }}
        >
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </p>
 
        <button
        onClick={scrollToPhoneSection}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover ? "#1a1717ff" : "#387ed1",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            width: "240px",
            borderRadius: "4px",
            fontSize: "18px",
            fontWeight: "500",
            marginTop: "20px",
            cursor: "pointer",
            transition: "0.2s ease",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
