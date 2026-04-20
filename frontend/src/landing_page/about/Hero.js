import React from "react";

function Hero() {
  return (
    <div className="container hero-section">

      {/* Heading */}
      <div className="row px-3 px-md-5 pb-5 pt-4 mb-4 text-center d-flex flex-column align-items-center">
        <h1 className="hero-heading mt-3 mt-md-5">
          Building a smarter way to learn trading.
          <br />
          Arthiq is a real-time paper trading simulation platform.
        </h1>
      </div>

      {/* 2 Column Section */}
      <div className="row px-3 px-md-5 mt-3 border-top text-muted about-body-row">

        {/* LEFT COLUMN */}
        <div className="col-12 col-md-6 py-4 px-3 px-md-5">
          <p>
            Arthiq was built with a simple idea — before risking real money in the
            markets, traders should be able to practice in a realistic environment.
          </p>
          <p>
            The platform simulates real market conditions using virtual capital,
            allowing users to test strategies, manage risk, and understand trading
            psychology without financial pressure.
          </p>
          <p>
            Our goal is not to be a brokerage platform, but a powerful learning tool
            for students, beginners, and serious market learners.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-12 col-md-6 py-4 px-3 px-md-5">
          <p>
            Arthiq focuses on clean design, performance tracking, and realistic order
            execution to replicate the trading experience as closely as possible.
          </p>
          <p>
            From portfolio analytics to profit &amp; loss tracking, every feature is
            designed to help users improve their decision-making skills.
          </p>
          <p>
            This project represents a combination of fintech, system design,
            authentication flows, and real-time data handling — built as a
            full-stack learning product.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;