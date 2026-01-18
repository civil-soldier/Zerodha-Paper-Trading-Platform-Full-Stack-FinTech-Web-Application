import React from "react";

function Footer() {
  const FooterButton = ({ children, className }) => (
    <button
      type="button"
      className={className}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        textAlign: "left",
        cursor: "pointer",
        color: "inherit",
      }}
    >
      {children}
    </button>
  );

  return (
    <>
      <style>{`
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
          color: #878787ff;
          line-height: 1.7;
        }
        .footer-bottom-menu {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          font-weight: 500;
          font-size: 12px;
          margin-left: 120px;
        }
      `}</style>

      <div className="container-fluid footer-container">
        <div className="row">
          {/* LEFT */}
          <div className="col-md-3 mb-5">
            <img src="/media/images/logo.svg" alt="Zerodha" className="footer-logo" />
            <p className="footer-small">© 2010 - 2025, Zerodha Broking Ltd.</p>

            <div className="footer-icons">
              {["x-twitter", "facebook", "instagram", "linkedin", "youtube", "whatsapp", "telegram"].map((icon) => (
                <FooterButton key={icon}>
                  <i className={`fa-brands fa-${icon}`}></i>
                </FooterButton>
              ))}
              <hr />
            </div>
          </div>

          {/* COLUMNS */}
          {[
            ["Account", ["Open demat account", "Minor demat account", "NRI demat account", "Commodity", "MTF"]],
            ["Support", ["Contact us", "Support portal", "Downloads"]],
            ["Company", ["About", "Careers", "Press & media"]],
            ["Quick links", ["Brokerage charges", "Markets", "Sectors"]],
          ].map(([title, items]) => (
            <div className="col-md-2 mb-4" key={title}>
              <h4 className="footer-heading">{title}</h4>
              {items.map((item) => (
                <FooterButton key={item} className="footer-link">
                  {item}
                </FooterButton>
              ))}
            </div>
          ))}

          {/* DISCLAIMER */}
          <div className="footer-disclaimer container-fluid">
            <p>
              Complaints:{" "}
              <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, DP:{" "}
              <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>
            </p>

            <p>
              Procedure to file a complaint on{" "}
              <FooterButton style={{ color: "#387ed1" }}>SEBI SCORES</FooterButton>
            </p>

            <div className="footer-bottom-menu">
              {["NSE", "BSE", "MCX", "Privacy policy", "Terms"].map((item) => (
                <FooterButton key={item}>{item}</FooterButton>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <span style={{ fontSize: "12px", color: "#878787" }}>
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
