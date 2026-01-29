import React, { useState } from "react";
import IpoApplyModal from "./IpoApplyModal";

const mockIpos = [
  { id: 1, name: "SHADOWFAX", company: "Shadowfax Technologies", date: "20 – 22 Jan", price: "118 – 124", minAmount: 14880, lotSize: 120, status: "APPLY" },
  { id: 2, name: "DIGILOGIC", company: "Digilogic Systems", date: "20 – 22 Jan", price: "98 – 104", minAmount: 249600, lotSize: 2400, status: "APPLY" },
  { id: 3, name: "KRMAYURVED", company: "Krm Ayurvedics", date: "21st – 23rd Jan", price: "128 – 135", minAmount: 270000, lotSize: 2000, status: "APPLY" },
  { id: 4, name: "HANNAH", company: "Hannah Enterprises", date: "22nd – 27th Jan", price: "67 – 70", minAmount: 280000, lotSize: 4000, status: "APPLY" },
  { id: 5, name: "SHAYONA", company: "Shayona Industries", date: "22nd – 27th Jan", price: "140 – 144", minAmount: 288000, lotSize: 2000, status: "APPLY" },
  { id: 6, name: "BHARATCOAL", company: "Bharat Coking Coal", date: "9 – 13 Jan", price: "21 – 23", minAmount: 13800, lotSize: 600, status: "CLOSED" },
  { id: 7, name: "AMAGI", company: "Amagi Media", date: "10 – 12 Jan", price: "345 – 355", minAmount: 17775, lotSize: 41, status: "CLOSED" }
];

export const ipoData = mockIpos;

const IpoList = ({ search }) => {
  const [selectedIpo, setSelectedIpo] = useState(null);

  const filtered = mockIpos.map(ipo => {
    const match =
      ipo.name.toLowerCase().includes(search) ||
      ipo.company.toLowerCase().includes(search);
    return { ...ipo, match };
  });

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
              <td>{ipo.minAmount}<div className="ipo-sub">{ipo.lotSize} Qty.</div></td>
              <td>
                {ipo.status === "APPLY" ? (
                  <button className="apply-btn" onClick={() => setSelectedIpo(ipo)}>Apply</button>
                ) : (
                  <button className="closed-btn" disabled>Closed</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedIpo && <IpoApplyModal ipo={selectedIpo} onClose={() => setSelectedIpo(null)} />}
    </>
  );
};

export default IpoList;
