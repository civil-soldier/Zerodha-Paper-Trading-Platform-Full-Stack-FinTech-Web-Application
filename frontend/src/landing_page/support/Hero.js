import React, { useState } from 'react';

function Hero() {
    const [hover, setHover] = useState(false);
  return (
    <section className="support-hero">

      {/* Top row */}
      <div className="support-hero-header">
        <h1>Support Portal</h1>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover ? "#1a1717ff" : "#387ed1",
            color: "#fff",
            border: "none",
            padding: "10px 18px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "500",
            marginTop: "20px",
            cursor: "pointer",
            transition: "0.2s ease",
          }}
        >
            My tickets
        </button>
      </div>

      {/* Search bar */}
      <div className="support-search-box">
        <span className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>

    </section>
  );
}

export default Hero;
