import React, { useState, useEffect } from "react";
import GsecBidModal from "./GsecBidModal";

const GovtSecuritiesList = ({ search }) => {
  const [gsecs, setGsecs] = useState([]);
  const [selectedGsec, setSelectedGsec] = useState(null);

  useEffect(() => {
    fetch("https://zerodha-papertradingplatform.onrender.com/api/gsecs/all")
      .then(res => res.json())
      .then(data => setGsecs(data))
      .catch(err => console.error("GSEC fetch error:", err));
  }, []);

  const filtered = gsecs.map(sec => {
    const match = sec.name.toLowerCase().includes((search || "").toLowerCase());
    return { ...sec, match };
  });

  return (
    <>
      <table className="ipo-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Instrument</th>
            <th>Yield*</th>
            <th>Ends on</th>
            <th>Order value</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((sec) => (
            <tr
              key={sec._id}
              className={`${search && !sec.match ? "row-faded" : ""} ${sec.match ? "row-highlight" : ""}`}
            >
              <td><span className="gsec-badge">GSEC</span></td>
              <td>{sec.name}</td>
              <td>{sec.indicativeYield}%</td>
              <td>{new Date(sec.biddingEndDate).toDateString()}</td>
              <td className="muted">—</td>
              <td>
                <button className="apply-btn" onClick={() => setSelectedGsec(sec)}>
                  Place bid
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedGsec && (
        <GsecBidModal
          bond={selectedGsec}
          onClose={() => setSelectedGsec(null)}
        />
      )}
    </>
  );
};

export default GovtSecuritiesList;
