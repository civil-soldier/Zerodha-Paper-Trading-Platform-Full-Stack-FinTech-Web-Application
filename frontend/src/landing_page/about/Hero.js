import React from "react";

function Hero() {
  return (
    <div className="container hero-section">
      {/* Heading */}
      <div className="row p-5 mb-5 text-center d-flex flex-column align-items-center">
        <h1 className="mt-5" style={{ fontWeight: 500, fontSize: "25px" }}>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* ------------------ 2 Column Section ------------------ */}
      <div
        className="row p-5 mt-5 border-top text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "4em" }}
      >
        {/* LEFT COLUMN */}
        <div className="col-6 p-5" style={{ marginTop: "10px" }}>
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-6 p-5" style={{ marginTop: "10px" }}>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a href="#">Rainmatter</a>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <a href="#">blog</a> or see what the media
            is <a href="#">saying about us</a> or learn more about our business
            and product <a href="#">philosophies</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
