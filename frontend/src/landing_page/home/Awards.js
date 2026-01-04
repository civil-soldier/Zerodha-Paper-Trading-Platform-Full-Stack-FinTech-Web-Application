import React from "react";

function Awards() {
  return (
    <div className="container mt-5" style={{ marginTop: "120px" }}>
      <div className="row">
        {/* LEFT IMAGE */}
        <div className="col-6 p-5">
          <img
            src="/media/images/largestBroker.svg"
            alt="Awards Image"
            style={{ width: "100%", maxWidth: "480px" }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="col-6 p-5 mt-4">
          {/* Heading */}
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 500,
              marginBottom: "15px",
              whiteSpace: "nowrap",
            }}
          >
            Largest stock broker in India
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "30px",
            }}
          >
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            {/* Left list */}
            <div className="col-6">
              <ul style={{ lineHeight: "2", paddingLeft: "20px" }}>
                <li>
                  <p style={{ margin: 0 }}>Future and Options</p>
                </li>
                <li>
                  <p style={{ margin: 0 }}>Commodity Derivatives</p>
                </li>
                <li>
                  <p style={{ margin: 0 }}>Currency Derivatives</p>
                </li>
              </ul>
            </div>

            {/* Right list */}
            <div className="col-6">
              <ul style={{ lineHeight: "2", paddingLeft: "20px" }}>
                <li>
                  <p style={{ margin: 0 }}>Stocks & IPOs</p>
                </li>
                <li>
                  <p style={{ margin: 0 }}>Direct mutual funds</p>
                </li>
                <li>
                  <p style={{ margin: 0 }}>Bonds and Govt securities</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Logos */}
          <img
            src="/media/images/pressLogos.png"
            alt="Press logos"
            style={{ width: "85%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
