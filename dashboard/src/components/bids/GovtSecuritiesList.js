import React, { useState } from "react";
import GsecBidModal from "./GsecBidModal";

const govtSecurities = [
  {
    id: 1,
    type: "GSEC",
    instrument: "7.24% GS 2055",
    yield: "7.40%",
    endsOn: "Thu, 22 Jan 2026",
    price: 106,
    maturity: "06 Oct 2035",
  },
  {
    id: 2,
    type: "GSEC",
    instrument: "New GS 2029",
    yield: "5.93%",
    endsOn: "Thu, 22 Jan 2026",
    price: 102,
    maturity: "15 Jun 2029",
  },
  {
    id: 3,
    type: "GSEC",
    instrument: "New GS 2033",
    yield: "6.72%",
    endsOn: "Thu, 22 Jan 2026",
    price: 104,
    maturity: "10 Mar 2033",
  },
];

export const govtData = govtSecurities; // ✅ NOW after declaration

const GovtSecuritiesList = ({ search }) => {
  const [selectedGsec, setSelectedGsec] = useState(null);

  const filtered = govtSecurities.map(sec => {
    const match = sec.instrument.toLowerCase().includes(search || "");
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
              key={sec.id}
              className={`${search && !sec.match ? "row-faded" : ""} ${sec.match ? "row-highlight" : ""}`}
            >
              <td><span className="gsec-badge">{sec.type}</span></td>
              <td>{sec.instrument}</td>
              <td>{sec.yield}</td>
              <td>{sec.endsOn}</td>
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
