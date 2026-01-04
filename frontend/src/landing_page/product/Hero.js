import React from "react";

function Hero() {
  return (
    <div className="container hero-section">
      {/* Heading */}
      <div className="row p-5 mb-5 text-center d-flex flex-column align-items-center">
        <h1 className="mt-5 mb-3" style={{ fontWeight: 500, fontSize: "30px" }}>
          Technology
        </h1>
        <h2 style={{ fontWeight: 400, fontSize: "23px" }}>
          Sleek, modern, and intuitive trading platforms
        </h2>
        <p
          className="mt-3"
          style={{ fontWeight: 400, fontSize: "18px", color: "#555" }}
        >
          Check out our <a href="#">investment offerings →</a>
        </p>
      </div>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #e6e6e6",
            margin: "60px 0",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Hero;
