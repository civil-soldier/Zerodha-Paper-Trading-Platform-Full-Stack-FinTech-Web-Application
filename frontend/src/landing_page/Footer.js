import React from "react";

function Footer() {
  return (
    <>
      <style>
        {`
          .footer-container {
            width: 100%;
            padding: 60px 100px;
            margin-top: 60px;
            background-color: #f9f9f9;
          }

          .footer-logo {
            width: 150px;
            margin-bottom: 15px;
          }

          .footer-heading {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 16px;
          }

          .footer-link {
            color: #666 !important;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            margin-bottom: 20px;
            display: flex;
          }

          .footer-link:hover {
            color: #387ed1 !important;
          }

          .footer-small {
            font-size: 14px;
            color: #666;
          }

          .footer-icons i {
            font-size: 20px;
            margin-right: 15px;
            color: #666;
            cursor: pointer;
          }

          .footer-icons i:hover {
            color: #387ed1;
          }

          .footer-icons hr {
            margin: 10px 0;
            border: none;
            border-top: 1px solid #ccc;
          }

          .footer-disclaimer {
            padding: 10px 2px;
            background-color: #f9f9f9;
            font-size: 11px;
            color: #878787;
            line-height: 1.7;
            margin-top: 0px;
          }

          .footer-disclaimer a {
            color: #387ed1 !important;
            text-decoration: none;
          }

          .footer-disclaimer a:hover {
            text-decoration: underline;
          }

          .footer-bottom-menu {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            font-weight: 500;
            font-size: 12px;
            margin-bottom: -50px;
            margin-left: 120px;
          }

          .footer-bottom-menu a {
            color: #878787 !important;
            text-decoration: none;
          }

          .footer-bottom-menu a:hover {
            color: #387ed1 !important;
          }
        `}
      </style>

      <div className="container-fluid footer-container">
        <div className="row">
          {/* LEFT BLOCK */}
          <div className="col-md-3 col-sm-12 mb-5">
            <img
              src="/media/images/logo.svg"
              alt="Logo"
              className="footer-logo"
            />

            <p className="footer-small">
              © 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="footer-icons">
              <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>

              <hr />

              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i className="fa-brands fa-telegram"></i></a>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h4 className="footer-heading">Account</h4>
            <a className="footer-link" href="">Open demat account</a>
            <a className="footer-link" href="">Minor demat account</a>
            <a className="footer-link" href="">NRI demat account</a>
            <a className="footer-link" href="">Commodity</a>
            <a className="footer-link" href="">Dematerialisation</a>
            <a className="footer-link" href="">Fund transfer</a>
            <a className="footer-link" href="">MTF</a>
            <a className="footer-link" href="">Referral program</a>
          </div>

          {/* SUPPORT */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h4 className="footer-heading">Support</h4>
            <a className="footer-link" href="">Contact us</a>
            <a className="footer-link" href="">Support portal</a>
            <a className="footer-link" href="">How to file a complaint?</a>
            <a className="footer-link" href="">Status of your complaints</a>
            <a className="footer-link" href="">Bulletin</a>
            <a className="footer-link" href="">Circular</a>
            <a className="footer-link" href="">Z-Connect blog</a>
            <a className="footer-link" href="">Downloads</a>
          </div>

          {/* COMPANY */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h4 className="footer-heading">Company</h4>
            <a className="footer-link" href="">About</a>
            <a className="footer-link" href="">Philosophy</a>
            <a className="footer-link" href="">Press & media</a>
            <a className="footer-link" href="">Careers</a>
            <a className="footer-link" href="">Zerodha Cares (CSR)</a>
            <a className="footer-link" href="">Zerodha.tech</a>
            <a className="footer-link" href="">Open source</a>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2 col-sm-6 mb-4">
            <h4 className="footer-heading">Quick links</h4>
            <a className="footer-link" href="">Upcoming IPOs</a>
            <a className="footer-link" href="">Brokerage charges</a>
            <a className="footer-link" href="">Market holidays</a>
            <a className="footer-link" href="">Economic calendar</a>
            <a className="footer-link" href="">Calculators</a>
            <a className="footer-link" href="">Markets</a>
            <a className="footer-link" href="">Sectors</a>
          </div>

          {/* DISCLAIMER */}
          <div className="footer-disclaimer container-fluid">
            {/* Disclaimer text unchanged */}
            <div className="footer-bottom-menu">
              <a href="#">NSE</a>
              <a href="#">BSE</a>
              <a href="#">MCX</a>
              <a href="#">Terms & conditions</a>
              <a href="#">Policies & procedures</a>
              <a href="#">Privacy policy</a>
              <a href="#">Disclosure</a>
              <a href="#">For investor's attention</a>
              <a href="#">Investor charter</a>
            </div>

            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "60px",
                paddingTop: "20px",
                borderTop: "1px solid #e0e0e0",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#878787",
                  letterSpacing: "0.5px",
                }}
              >
                Built by <strong>Yash Kumar</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
