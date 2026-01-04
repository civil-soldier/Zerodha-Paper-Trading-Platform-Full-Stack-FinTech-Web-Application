import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

  const [hover, setHover] = useState(false);

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center d-flex flex-column align-items-center">
        <h1 className="mt-5" style={{ fontWeight: 500, fontSize: "25px" }}>
          404 - Page Not Found
        </h1>

        <p
          className="mt-3"
          style={{ fontSize: "18px", color: "#555", letterSpacing: "0.3px" }}
        >
          Sorry the page you are looking for does not exist.
        </p>

        <Link to={"/"}>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: hover ? "#1a1717ff" : "#387ed1",
            color: "#fff",
            border: "none",
            padding: "12px 24px",
            width: "240px",
            borderRadius: "4px",
            fontSize: "18px",
            fontWeight: "500",
            marginTop: "20px",
            cursor: "pointer",
            transition: "0.2s ease",
          }}
        >Go to Home
        </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
