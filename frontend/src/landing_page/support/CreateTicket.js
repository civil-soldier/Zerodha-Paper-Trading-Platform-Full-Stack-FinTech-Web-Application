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
                    <a href="#">{item}</a>
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
              <a href="#">
                Kite affected by Cloudflare downtime <br></br>[Resolved]
              </a>
            </li>
            <li>
              <a href="#">Offer for sale (OFS) – December 2025</a>
            </li>
          </ul>
        </div>

        <div className="quick-links-table container hero-section">
          <div className="ql-header">
            <span>Quick links</span>
          </div>

          <div className="ql-row">
            <a href="#">1. Track account opening</a>
          </div>
          <div className="ql-row">
            <a href="#">2. Track segment activation</a>
          </div>
          <div className="ql-row">
            <a href="#">3. Intraday margins</a>
          </div>
          <div className="ql-row">
            <a href="#">4. Kite user manual</a>
          </div>
          <div className="ql-row">
            <a href="#">5. Learn how to create a ticket</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;
