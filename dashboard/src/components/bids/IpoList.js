import React, { useState } from "react";
import IpoApplyModal from "./IpoApplyModal";

const mockIpos = [
  {
    id: 1,
    name: "Shadowfax",
    price: 124,
    lotSize: 120,
    status: "OPEN",
  },
  {
    id: 2,
    name: "Digilogic",
    price: 104,
    lotSize: 2400,
    status: "OPEN",
  },
];

const IpoList = () => {
  const [selectedIpo, setSelectedIpo] = useState(null);

  return (
    <>
      <table className="ipo-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Price</th>
            <th>Lot size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mockIpos.map((ipo) => (
            <tr key={ipo.id}>
              <td>{ipo.name}</td>
              <td>₹{ipo.price}</td>
              <td>{ipo.lotSize}</td>
              <td>
                <button
                  className="apply-btn"
                  onClick={() => setSelectedIpo(ipo)}
                >
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedIpo && (
        <IpoApplyModal
          ipo={selectedIpo}
          onClose={() => setSelectedIpo(null)}
        />
      )}
    </>
  );
};

export default IpoList;
