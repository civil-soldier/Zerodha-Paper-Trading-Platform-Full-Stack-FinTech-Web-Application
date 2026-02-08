import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const IpoApplyModal = ({ ipo, onClose, refreshFunds }) => {
  const cleanPrice = (p) =>
  Number(String(p).replace(/[₹,\s]/g, ""));
  const priceStr = String(ipo.price);
const hasRange = priceStr.includes("–") || priceStr.includes("-");


  const minPrice = hasRange
  ? cleanPrice(priceStr.split(/–|-/)[0])
  : cleanPrice(priceStr);

const maxPrice = hasRange
  ? cleanPrice(priceStr.split(/–|-/)[1])
  : cleanPrice(priceStr);


  //  DEFAULT VALUES (THIS WAS MISSING)
  const [qty, setQty] = useState(ipo.lotSize);
  const [price, setPrice] = useState(maxPrice); // ALWAYS UPPER BAND
  const [cutoff, setCutoff] = useState(hasRange);
  const [amount, setAmount] = useState(ipo.minAmount); // TABLE MIN AMOUNT

  //  Recalculate only if user changes things
  useEffect(() => {
    const total = qty * price;
    setAmount(total);
  }, [qty, price]);

  const handleQtyChange = (val) => {
    if (val < ipo.lotSize) return;
    const lots = Math.floor(val / ipo.lotSize) * ipo.lotSize;
    setQty(lots);
  };

  const handlePriceChange = (val) => {
    if (cutoff) return; // cutoff locked
    const p = Math.max(minPrice, Math.min(maxPrice, val));
    setPrice(p);
  };

  const handleCutoff = () => {
    const next = !cutoff;
    setCutoff(next);
    setPrice(next ? maxPrice : minPrice);
  };

  const lots = qty / ipo.lotSize;

  const handleApply = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/ipos/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ipoId: ipo._id, // MUST be Mongo ID
          lots,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      toast.success("IPO applied & funds blocked");
      refreshFunds(); // update dashboard
      onClose();
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
  if (!qty || !price) return;
  const total = qty * price;
  setAmount(total);
}, [qty, price]);


  return (
    <div className="modal-overlay">
      <div className="modal-card-lg">
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{ipo.name}</h2>
            <span className="badge">IPO Application</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-divider" />

        <div className="info-grid">
          <div className="info-box">
            <span>Issue Price</span>
            <b>{ipo.price}</b>
          </div>
          <div className="info-box">
            <span>Lot Size</span>
            <b>{ipo.lotSize} Shares</b>
          </div>
        </div>
        <div className="form-row">
          {/* LEFT COLUMN */}
          <div className="input-box">
            <label>Quantity (Shares)</label>
            <input
              type="number"
              value={qty}
              min={ipo.lotSize}
              step={ipo.lotSize}
              onChange={(e) => handleQtyChange(Number(e.target.value))}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="input-box"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Bid Price (₹)</label>
            <input
              type="number"
              value={price}
              min={minPrice}
              max={maxPrice}
              disabled={cutoff}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
            />

            {hasRange && (
              <div
                style={{
                  marginTop: "8px",
                  display: "flex",
                  alignItems: "center",
                  color: "#aaa",
                  fontSize: "14px",
                }}
              >
                <input
                  type="checkbox"
                  checked={cutoff}
                  onChange={handleCutoff}
                  style={{ marginRight: "6px" }}
                />
                Apply at Cutoff Price (₹{maxPrice})
              </div>
            )}
            {!hasRange && (
  <div style={{ fontSize: "13px", color: "#888", marginTop: "8px" }}>
    Fixed Price IPO — bidding not required
  </div>
)}

          </div>
        </div>

        <div className="amount-box">
          <span>Amount Payable</span>
          <h2>₹{amount.toLocaleString()}</h2>
        </div>

        <div className="modal-actions">
          <button className="btn-primary" onClick={handleApply}>
            Submit Application
          </button>
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default IpoApplyModal;
