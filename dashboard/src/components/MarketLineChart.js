import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler
);

const MarketLineChart = () => {
  const [points, setPoints] = useState([100]);

  // 🔁 simulate market movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prev) => {
        const last = prev[prev.length - 1];
        const change = (Math.random() * 2 - 1) * 0.6; // smooth move
        const next = +(last + change).toFixed(2);

        const updated = [...prev, next];
        return updated.length > 30 ? updated.slice(1) : updated;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: points.map((_, i) => i + 1),
    datasets: [
      {
        data: points,
        fill: true,
        tension: 0.4,
        borderColor: "#00d0c6",
        backgroundColor: "rgba(0, 208, 198, 0.15)",
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: {
        ticks: { color: "#9aa4ad" },
        grid: { color: "#1f232d" },
      },
    },
  };

  return (
    <div className="data-card" style={{ height: "220px" , marginTop:"40px" }}>
      <h3 className="title" style={{ marginTop: "-10px" }}>Market overview</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default MarketLineChart;
