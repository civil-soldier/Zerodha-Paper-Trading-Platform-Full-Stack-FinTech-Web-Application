import React, { useState } from "react";

function CreateTicket() {
  const [openMap, setOpenMap] = useState({});

  const toggle = (index) => {
    setOpenMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const data = [
    {
      title: "Account Opening",
      icon: "fa-solid fa-circle-plus",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-solid fa-circle-user",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and DP",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-solid fa-cash-register",
      items: [
        "IPO",
        "Trading FAQs",
        "MTF and Margins",
        "Charts and orders",
        "Alerts and nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa-solid fa-indian-rupee-sign",
      items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "fa-solid fa-terminal",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "fa-solid fa-cent-sign",
      items: [
        "Mutual funds",
        "NPS",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <section className="support-content-wrapper mt-5 mb-4">
      <div className="support-left mt-4">
        {data.map((section, index) => (
          <div className="faq-card mb-4" key={index}>
            <div className="faq-header" onClick={() => toggle(index)}>
              <div className="faq-title">
                <i className={section.icon}></i>
                <span>{section.title}</span>
              </div>

              <span className="arrow">{openMap[index] ? "▲" : "▼"}</span>
            </div>

            <div className={`accordion-body ${openMap[index] ? "open" : ""}`}>
              <ul className="faq-list container hero-section">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <button type="button" className="faq-link">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN (ZERODHA STYLE) */}
      <div className="support-right mt-4">
        {/* ALERT BOX */}
        <div className="alert-box">
          <ul>
            <li>
              <button type="button" className="alert-link">
                Kite affected by Cloudflare downtime <br />
                [Resolved]
              </button>
            </li>
            <li>
              <button type="button" className="alert-link">
                Kite affected by Cloudflare downtime <br />
                [Resolved]
              </button>
            </li>
          </ul>
        </div>

        <div className="quick-links-table container hero-section">
          <div className="ql-header">
            <span>Quick links</span>
          </div>

          <div className="ql-row">
            <button type="button" className="ql-link">
              1. Track account opening
            </button>
          </div>
          <div className="ql-row">
            <button type="button" className="ql-link">
              2. Track segment activation
            </button>
          </div>
          <div className="ql-row">
            <button type="button" className="ql-link">
              3. Intraday margins
            </button>
          </div>
          <div className="ql-row">
            <button type="button" className="ql-link">
              4. Kite user manual
            </button>
          </div>
          <div className="ql-row">
            <button type="button" className="ql-link">
              5. Learn how to create a ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
