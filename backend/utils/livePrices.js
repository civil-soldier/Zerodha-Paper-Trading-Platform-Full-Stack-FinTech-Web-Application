// utils/livePrices.js

const basePrices = {
  INFY: 1555.45,
  ONGC: 116.8,
  TCS: 3194.8,
  ITC: 207.9,
  RELIANCE: 2112.4,
  KPITTECH: 1050.0,
  WIPRO: 400.3,
  QUICKHEAL: 520.5,
  "M&M": 825.6,
  HUL: 2200.0,
};

const livePrices = { ...basePrices };

function fluctuatePrices() {
  Object.keys(livePrices).forEach((symbol) => {
    const change = (Math.random() * 2 - 1) * 0.5; // ±0.5
    livePrices[symbol] = Math.max(
      1,
      +(livePrices[symbol] + change).toFixed(2)
    );
  });
}

// 🔁 update prices every 1.5 seconds
setInterval(fluctuatePrices, 1500);

module.exports = { livePrices };
