import React from "react";
import { toast } from "react-toastify";

const IpoApplyModal = ({ ipo, onClose }) => {
  const amount = ipo.price * ipo.lotSize;

  const handleApply = () => {
    toast.success("IPO bid applied successfully");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>{ipo.name}</h3>
        <p>Price: ₹{ipo.price}</p>
        <p>Quantity: {ipo.lotSize}</p>
        <p><b>Amount: ₹{amount}</b></p>

        <div className="modal-actions">
          <button className="btn btn-green" onClick={handleApply}>
            Submit
          </button>
          <button className="btn btn-grey" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default IpoApplyModal;
