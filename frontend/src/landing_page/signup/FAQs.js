import React, { useState } from "react";

const faqData = [
  {
    q: "What is a Zerodha account?",
    a: "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.",
  },
  {
    q: "What documents are required to open a demat account?",
    a: "PAN card, Aadhaar card, bank proof, and a signature are required to open a demat account.",
  },
  {
    q: "Is Zerodha account opening free?",
    a: "Yes, Zerodha offers free account opening for demat and trading accounts.",
  },
  {
    q: "Are there any maintenance charges for a demat account?",
    a: `The account maintenance charges is applicable based on the account type.
     For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.
     For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.
     To learn more about BSDA, Click here.`,  
  },
  {
    q: "Can I open a demat account without a bank account?",
    a: `To open a demat account, you must have a bank account in your name.If UPI verification is completed successfully, no proof of bank is needed.However, if bank verification fails, you'll need to provide either a
     cancelled cheque or a bank statement to link your bank account to Zerodha.`
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container faq-section mb-4">
      <h2 className="faq-title">FAQs</h2>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{item.q}</span>
              <span className={`faq-arrow ${openIndex === index ? "open" : ""}`}>
                ▾
              </span>
            </div>

            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
