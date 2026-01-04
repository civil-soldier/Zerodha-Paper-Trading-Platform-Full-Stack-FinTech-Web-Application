import React from "react";

function Steps() {
  return (
    <div className="container steps-section">
      {/* Heading */}
      <div className="row  mb-5 text-center">
        <h1 className="steps-title mt-5">
          Steps to open a demat account with Zerodha
        </h1>
      </div>

      {/* Content */}
      <div className="row align-items-center">
        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center mb-5 p-5 align-items-center">
          <img
            src="/media/images/steps-acop.svg"
            alt="Account opening steps"
            className="steps-image p-0"
          />
        </div>

        {/* RIGHT STEPS */}
        <div className="col-md-6 mb-5 p-5">
          <div className="step-row">
            <span className="step-number">01</span>
            <span className="step-text">Enter the requested details</span>
          </div>

          <div className="step-divider"></div>

          <div className="step-row">
            <span className="step-number">02</span>
            <span className="step-text">
              Complete e-sign & verification
            </span>
          </div>

          <div className="step-divider"></div>

          <div className="step-row">
            <span className="step-number">03</span>
            <span className="step-text">Start investing!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
