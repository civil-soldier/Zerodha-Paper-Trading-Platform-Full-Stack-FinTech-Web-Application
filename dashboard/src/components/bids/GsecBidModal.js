import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MIN_QTY = 100;

const GsecBidModal = ({ bond, onClose }) => {
  const [amount, setAmount] = useState(bond.price * MIN_QTY);
  const [qty, setQty] = useState(MIN_QTY);

  useEffect(() => {
    let calculatedQty = Math.floor(amount / bond.price);

    // Minimum 100 units
    if (calculatedQty < MIN_QTY) {
      calculatedQty = MIN_QTY;
    }

    // Round to nearest 100
    calculatedQty = Math.floor(calculatedQty / 100) * 100;

    setQty(calculatedQty);
  }, [amount, bond.price]);

  const handleBid = () => {
    if (qty < MIN_QTY) {
      toast.error("Minimum 100 units required");
      return;
    }

    toast.success("Bid placed successfully");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card-lg">
        <div className="modal-header">
          <div>
            <h2>{bond.instrument}</h2>
            <span className="gsec-badge">Govt Security</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-divider" />

        <div className="info-grid">
          <div className="info-box">
            <span>Yield</span>
            <b>{bond.yield}</b>
          </div>
          <div className="info-box">
            <span>Price</span>
            <b>₹{bond.price}</b>
          </div>
          <div className="info-box">
            <span>Maturity</span>
            <b>{bond.maturity}</b>
          </div>
        </div>

        <div className="input-box" style={{ marginTop: "20px" }}>
          <label>Investment Amount (₹)</label>
          <input
            type="number"
            value={amount}
            step="100"
            min={bond.price * MIN_QTY}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <small className="muted">
            Minimum ₹{bond.price * MIN_QTY} (100 units)
          </small>
        </div>

        <div className="amount-box">
          <span>Total Quantity</span>
          <h2>{qty} Units</h2>
        </div>

        <div className="modal-actions">
          <button className="btn-primary" onClick={handleBid}>
            Place Bid
          </button>
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default GsecBidModal;
