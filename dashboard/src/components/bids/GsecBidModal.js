import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MIN_QTY = 100;

const GsecBidModal = ({ bond, onClose, refreshFunds }) => {
  const [amount, setAmount] = useState(bond.pricePerUnit * MIN_QTY);
  const [qty, setQty] = useState(MIN_QTY);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let calculatedQty = Math.floor(amount / bond.pricePerUnit);

    if (calculatedQty < MIN_QTY) calculatedQty = MIN_QTY;
    calculatedQty = Math.floor(calculatedQty / 100) * 100;

    setQty(calculatedQty);
  }, [amount, bond.pricePerUnit]);

  const handleBid = async () => {
    try {
      const res = await fetch("https://zerodha-papertradingplatform.onrender.com/api/gsecs/bid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          gsecId: bond._id,
          investmentAmount: amount,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      toast.success("Bid placed successfully");
      refreshFunds();   // IPO-style update
      onClose();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card-lg">
        <div className="modal-header">
          <div>
            <h2>{bond.name}</h2>
            <span className="gsec-badge">Govt Security</span>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-divider" />

        <div className="info-grid">
          <div className="info-box">
            <span>Yield</span>
            <b>{bond.indicativeYield}%</b>
          </div>
          <div className="info-box">
            <span>Price</span>
            <b>₹{bond.pricePerUnit}</b>
          </div>
          <div className="info-box">
            <span>Maturity</span>
            <b>{new Date(bond.maturityDate).toDateString()}</b>
          </div>
        </div>

        <div className="input-box" style={{ marginTop: "20px" }}>
          <label>Investment Amount (₹)</label>
          <input
            type="number"
            value={amount}
            step="100"
            min={bond.pricePerUnit * MIN_QTY}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <small className="muted">
            Minimum ₹{bond.pricePerUnit * MIN_QTY} (100 units)
          </small>
        </div>

        <div className="amount-box">
          <span>Total Quantity</span>
          <h2>{qty} Units</h2>
        </div>

        <div className="modal-actions">
          <button className="btn-primary" onClick={handleBid} disabled={loading}>
            {loading ? "Placing..." : "Place Bid"}
          </button>
          <button className="btn-secondary" onClick={onClose} >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default GsecBidModal;
