import React, { useState } from "react";
import { Link } from "react-router-dom";

function Universe() {
  const [hover, setHover] = useState(false);

  return (
    <>
    <div className="container hero-section row align-items-center px-5 my-5 " style={{ maxWidth: "1100px" , marginTop:"80px" , marginBottom:"80px", margin: "0 auto" }}>
        <div className="row p-3 mb-5 text-center d-flex flex-column align-items-center">
            <h1 className="mt-2 mb-3" style={{ fontWeight: 500, fontSize: "30px"}}>The Zerodha Universe</h1>
            <p className="mt-2"
          style={{ fontWeight: 400, fontSize: "17px", color: "#555" }}>Extend your trading and investment experience even further with our partner platforms</p>
        </div>

        <div className="col-md-4 p-3 text-center d-flex flex-column align-items-center">
            <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{ width: "65%", height: "auto" }} />
            <p className="mt-4"
          style={{ fontWeight: 500, fontSize: "13px", color: "#a5a5a5ff" }}>Our asset management venture
               that is creating simple and transparent index
               funds to help you save for your goals.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center d-flex flex-column align-items-center">
            <img src="/media/images/sensibullLogo.svg" alt="Sensibull" style={{ width: "75%", height: "auto" }} />
            <p className="mt-4"
          style={{ fontWeight: 500, fontSize: "13px", color: "#a5a5a5ff" }}>Options trading platform that lets you
               create strategies, analyze positions, and examine
               data points like open interest, FII/DII, and more.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center d-flex flex-column align-items-center">
            <img src="/media/images/tijori.svg" alt='Tijori' style={{ width: "48%", height: "auto" }} />
            <p className="mt-4"
          style={{ fontWeight: 500, fontSize: "13px", color: "#a5a5a5ff" }}>Investment research platform
               that offers detailed insights on stocks,
               sectors, supply chains, and more.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center d-flex flex-column align-items-center">
            <img src="/media/images/streakLogo.png" alt='Streak' style={{ width: "57%", height: "auto" }} />
            <p className="mt-4"
          style={{ fontWeight: 500, fontSize: "13px", color: "#a5a5a5ff" }}>Systematic trading platform
               that allows you to create and backtest
               strategies without coding.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center d-flex flex-column align-items-center">
            <img src="/media/images/smallcaseLogo.png" alt='Smallcase' style={{ width: "68%", height: "auto" }} />
            <p className="mt-4"
          style={{ fontWeight: 500, fontSize: "13px", color: "#a5a5a5ff" }}>Thematic investing platform
               that helps you invest in diversified
               baskets of stocks on ETFs.
            </p>
        </div>

        <div className="col-md-4 p-3 text-center d-flex flex-column align-items-center">
            <img src="/media/images/dittoLogo.png" alt='Ditto' style={{ width: "45%", height: "auto" }} />
            <p className="mt-4"
          style={{ fontWeight: 500, fontSize: "13px", color: "#a5a5a5ff" }}>Personalized advice on life
               and health insurance. No spam
               and no mis-selling.
            </p>
        </div>

        <div className="container p-4 mb-2">
      <div className="row text-center d-flex flex-column align-items-center">
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
            marginTop: "10px",
            cursor: "pointer",
            transition: "0.2s ease",
          }}
        >
          Sign up for free
        </button>
        </Link>
        </div>
      </div>
        </div>
    </>
  )
}

export default Universe;