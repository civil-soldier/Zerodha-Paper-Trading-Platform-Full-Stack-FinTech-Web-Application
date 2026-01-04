import React from "react";

function Education() {
  return (
    <div
      className="container"
      style={{ marginTop: "140px", marginBottom: "120px" }}
    >
      <div className="row">
        <div className="col-6">
          <img
            src="/media/images/education.svg"
            alt="education"
            style={{ width: "80%", maxWidth: "480px" }}
          />
        </div>
        <div className="col-6" style={{ paddingTop: "40px" }}>
          <h1
            className="mb-3"
            style={{
              fontSize: "32px",
              fontWeight: 500,
              marginBottom: "10px",
              whiteSpace: "nowrap",
            }}
          >
            Free and open market education
          </h1>
          <p style={{ fontSize: "17px", color: "#666", lineHeight: "1.6" }}>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            style={{
              fontSize: "17px",
              textDecoration: "none",
              color: "#387ed1",
            }}
          >
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p
            style={{
              marginTop: "30px",
              fontSize: "17px",
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            style={{
              fontSize: "17px",
              textDecoration: "none",
              color: "#387ed1",
              marginTop: "10px",
            }}
          >
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
