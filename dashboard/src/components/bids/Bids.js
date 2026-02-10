import React, { useState } from "react";
import "./bids.css";
import IpoList from "./IpoList";
import GovtSecuritiesList from "./GovtSecuritiesList";

const EmptyState = ({ title, subtitle }) => (
  <div className="empty-state">
    <p className="empty-title">{title}</p>
    {subtitle && <p className="empty-sub">{subtitle}</p>}
  </div>
);

const Bids = () => {
  const [activeTab, setActiveTab] = useState("ipo");
  const [search, setSearch] = useState("");

  const fetchFunds = async () => {
    const token = localStorage.getItem("token");

    await fetch(`${process.env.REACT_APP_API_URL}/api/funds`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  };

  return (
    <div className="data-card">
      <h1 className="bids-title">Bids</h1>

      <div className="bids-tabs">
        {["ipo", "govt", "auctions", "corporate", "sse"].map((tab) => (
          <button
            key={tab}
            className={`bids-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="bids-topbar">
        <div className="section-header">
          {activeTab === "ipo" && <h2>IPOs</h2>}
          {activeTab === "govt" && <h2>Govt. Securities</h2>}
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="bids-search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <div className="table-card">
        {activeTab === "ipo" && <IpoList search={search} refreshFunds={fetchFunds} />}
        {activeTab === "govt" && <GovtSecuritiesList search={search} refreshFunds={fetchFunds} />}

        {activeTab === "auctions" && (
          <EmptyState title="There are no stocks for auctions yet." />
        )}

        {activeTab === "corporate" && (
          <EmptyState title="There are no open corporate actions right now." />
        )}

        {activeTab === "sse" && (
          <EmptyState title="No active Social Stock Exchange (SSE) issues." />
        )}
      </div>
    </div>
  );
};

export default Bids;
