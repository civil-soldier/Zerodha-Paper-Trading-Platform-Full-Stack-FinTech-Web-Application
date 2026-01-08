import React from "react";
import { VerticalGraph } from "./VerticalGraph";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Holdings = () => {
  const { holdings } = useContext(GeneralContext);

  const labels = holdings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // ✅ PORTFOLIO LEVEL CALCULATIONS (OUTSIDE MAP)
  const totalInvestment = holdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = holdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const totalPnL = currentValue - totalInvestment;

  const totalPnLPercent =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  return (
    <>
      <div className="data-card">
        <h3 className="title">Holdings ({holdings.length})</h3>

        <div className="order-table">
          <table>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>

            {holdings
            .filter(stock => stock.name && stock.name.trim() !== "")
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const invested = stock.avg * stock.qty;
              const stockPnL = curValue - invested;
              const netChange =
                invested > 0 ? (stockPnL / invested) * 100 : 0;
              const dayChangeValue = stock.price - stock.avg;
const dayChangePercent =
  stock.avg > 0 ? (dayChangeValue / stock.avg) * 100 : 0;

              const profClass = stockPnL >= 0 ? "profit" : "loss";
              const dayClass = dayChangeValue >= 0 ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{stockPnL.toFixed(2)}</td>
                  <td className={profClass}>{netChange.toFixed(2)}%</td>
                  <td className={dayClass}>{dayChangePercent.toFixed(2)}%</td>
                </tr>
              );
            })}
          </table>
        </div>

        {/* ✅ MID SECTION — USE PORTFOLIO VALUES */}
        <div className="row">
          <div className="col">
            <h5>{totalInvestment.toFixed(2)}</h5>
            <p>Total investment</p>
          </div>

          <div className="col">
            <h5>{currentValue.toFixed(2)}</h5>
            <p>Current value</p>
          </div>

          <div className="col">
            <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
              {totalPnL.toFixed(2)} ({totalPnLPercent.toFixed(2)}%)
            </h5>
            <p style={{marginTop:"-34px"}}>P&amp;L</p>
          </div>
        </div>

        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
