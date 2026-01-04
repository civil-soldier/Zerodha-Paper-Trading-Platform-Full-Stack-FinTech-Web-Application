import React from "react"

function Types() {
  return (
    <div className="container types-section">
      {/* Heading */}
      <div className="row text-center mb-5">
        <h2 className="types-title">Explore different account types</h2>
      </div>

      {/* Grid */}
      <div className="row g-4">

        {/* Individual */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <div className="type-icon"><i class="fa-solid fa-user"></i></div>
            <h4>Individual Account</h4>
            <p>Invest in equity, mutual funds and derivatives</p>
          </div>
        </div>

        {/* HUF (highlighted) */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <div className="type-icon"><i class="fa-solid fa-users"></i></div>
            <h4>HUF Account</h4>
            <p>Make tax-efficient investments for your family</p>
          </div>
        </div>

        {/* NRI */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <div className="type-icon"><i class="fa-solid fa-globe"></i></div>
            <h4>NRI Account</h4>
            <p>Invest in equity, mutual funds, debentures, and more</p>
          </div>
        </div>

        {/* Minor */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <div className="type-icon"><i class="fa-solid fa-child"></i></div>
            <h4>Minor Account</h4>
            <p>
              Teach your little ones about money & invest for their future
            </p>
          </div>
        </div>

        {/* Corporate */}
        <div className="col-md-4 mb-4">
          <div className="type-card">
            <div className="type-icon"><i class="fa-solid fa-building-columns"></i></div>
            <h4>Corporate / LLP / Partnership</h4>
            <p>
              Manage your business surplus and investments easily
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Types;
