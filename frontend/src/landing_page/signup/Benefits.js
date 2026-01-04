import React from "react";

function Benefits() {
  return (
    <div className="container benefits-section">
      <div className="row align-items-start">

        {/* LEFT SIDE */}
        <div className="col-md-5 text-center text-align-center mt-5">
          <img
            src="/media/images/acop-benefits.svg"
            alt="Benefits"
            className="benefits-image"
          />
          <h2 className="benefits-title ">
            Benefits of opening a Zerodha demat account
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 p-4 mt-5" style={{marginLeft:"90px"}}>
          <div className="benefit-item">
            <h4 >Unbeatable pricing</h4>
            <p>
              Zero charges for equity & mutual fund investments. Flat ₹20
              fees for intraday and F&O trades.
            </p>
          </div>

          <div className="benefit-item">
            <h4>Best investing experience</h4>
            <p>
              Simple and intuitive trading platform with an
              easy-to-understand user interface.
            </p>
          </div>

          <div className="benefit-item">
            <h4>No spam or gimmicks</h4>
            <p>
              Committed to transparency — no gimmicks, spam,
              “gamification”, or intrusive push notifications.
            </p>
          </div>

          <div className="benefit-item">
            <h4>The Zerodha universe</h4>
            <p>
              More than just an app — gain free access to the
              entire ecosystem of our partner products.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Benefits;
