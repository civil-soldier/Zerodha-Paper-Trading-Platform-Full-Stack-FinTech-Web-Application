import React, { useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center d-flex flex-column align-items-center">
        <img
          src="/media/images/homeHero.svg"
          alt="Hero Image"
          className="mb-5"
          style={{ width: "80%", maxWidth: "700px" }}
        />

        <h1 className="mt-5" style={{ fontWeight: 500, fontSize: "32px" }}>
          Invest in everything
        </h1>

        <p
          className="mt-3"
          style={{ fontSize: "23px", color: "#555", letterSpacing: "0.3px" }}
        >
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

       <Link to="/signup" style={{ textDecoration: "none" }}>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover ? "#1a1717ff" : "#387ed1",
            color: hover ? "#fff" : "#fff",
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
         </Link>
      </div>
    </div>
  );
}

export default Hero;
