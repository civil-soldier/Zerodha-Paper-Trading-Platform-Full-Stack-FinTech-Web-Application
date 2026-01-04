import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { VerticalGraph } from "./VerticalGraph";
import GeneralContext from "./GeneralContext";

const Positions = () => {
  const { positions, fetchPositions } = useContext(GeneralContext);
  const location = useLocation();

  // 🔥 AUTO-REFRESH POSITIONS
  useEffect(() => {
    fetchPositions();
  }, [location.pathname]); // runs on page change

  const labels = positions.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: positions.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="data-card">
        <h3 className="title">Positions ({positions.length})</h3>

        <div className="data-card positions">
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg.</th>
                  <th>LTP</th>
                  <th>P&amp;L</th>
                  <th>Chg.</th>
                </tr>
              </thead>
              <tbody>
                {positions.map((stock, index) => {
                  const curValue = stock.price * stock.qty;
                  const invested = stock.avg * stock.qty;
                  const pnl = curValue - invested;
                  const profClass = pnl >= 0 ? "profit" : "loss";

                  return (
                    <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={profClass}>{pnl.toFixed(2)}</td>
                      <td className={profClass}>
                        {invested > 0
                          ? ((pnl / invested) * 100).toFixed(2)
                          : "0.00"}
                        %
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Positions;
