import React, { useState } from "react";
import IpoApplyModal from "./IpoApplyModal";
import { useContext } from "react";
import GeneralContext from "../GeneralContext";
import { useEffect } from "react";

const IpoList = ({ search }) => {
  const [selectedIpo, setSelectedIpo] = useState(null);
  const [ipos, setIpos] = useState([]);

  const filtered = ipos.map((ipo) => {
    const match =
      ipo.name.toLowerCase().includes(search) ||
      ipo.company.toLowerCase().includes(search);
    return { ...ipo, match };
  });

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/api/ipos`)
    .then(res => res.json())
    .then(data => {
      const formatted = data.map((ipo, index) => ({
        id: index + 1,
        _id: ipo._id, // for applying IPO
        name: ipo.symbol,
        company: ipo.companyName,
        date: "20 – 22 Jan", // optional later dynamic karenge
        price: `₹${ipo.price}`, // backend me upper band only
        minAmount: ipo.price * ipo.lotSize,
        lotSize: ipo.lotSize,
        status: ipo.status === "OPEN" ? "APPLY" : "CLOSED"
      }));

      setIpos(formatted);
    });
}, []);


  const { fetchFunds } = useContext(GeneralContext);

  return (
    <>
      <table className="ipo-table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Date</th>
            <th>Price (₹)</th>
            <th>Min. amount (₹)</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((ipo) => (
            <tr
              key={ipo.id}
              className={`
                ${ipo.status === "CLOSED" ? "row-disabled" : ""}
                ${search && !ipo.match ? "row-faded" : ""}
                ${ipo.match ? "row-highlight" : ""}
              `}
            >
              <td>
                <div className="ipo-name">{ipo.name}</div>
                <div className="ipo-sub">{ipo.company}</div>
              </td>
              <td>{ipo.date}</td>
              <td>{ipo.price}</td>
              <td>
                {ipo.minAmount}
                <div className="ipo-sub">{ipo.lotSize} Qty.</div>
              </td>
              <td>
                {ipo.status === "APPLY" ? (
                  <button
                    className="apply-btn"
                    onClick={() => setSelectedIpo(ipo)}
                  >
                    Apply
                  </button>
                ) : (
                  <button className="closed-btn" disabled>
                    Closed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedIpo && (
        <IpoApplyModal
          ipo={selectedIpo}
          onClose={() => setSelectedIpo(null)}
          refreshFunds={fetchFunds}
        />
      )}
    </>
  );
};

export default IpoList;
