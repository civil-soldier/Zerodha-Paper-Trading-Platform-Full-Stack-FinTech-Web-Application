import React from "react";

function Team() {
  return (
    <div className="container hero-section">

      {/* Heading */}
      <div className="row mb-4 text-center d-flex flex-column align-items-center">
        <h1 className="mt-2 team-heading">People</h1>
      </div>

      {/* 2 Column Section */}
      <div className="row text-muted team-body-row">

        {/* LEFT COLUMN — photo + name */}
        <div className="col-12 col-md-5 text-center mb-4 mb-md-0 team-photo-col">
          <img
            src="/media/images/Yash1.png"
            alt="Yash Kumar"
            className="team-member-photo"
          />
          <h3 className="team-member-name">Yash Kumar</h3>
          <p className="team-member-role">Founder &amp; CEO</p>
        </div>

        {/* RIGHT COLUMN — bio */}
        <div className="col-12 col-md-7 team-bio-col">
          <p>
            Yash founded Arthiq as a full-stack fintech project focused on
            real-time paper trading simulation.
          </p>
          <p>
            With a background in Electronics &amp; Communication and a strong
            interest in software development, he enjoys building scalable,
            production-ready systems.
          </p>
          <p>
            This project includes authentication flows, dashboard analytics,
            protected routes, API integration, and deployment on modern
            cloud infrastructure.
          </p>
          <p>
            Outside of coding, he enjoys basketball and exploring new
            product ideas in the fintech space.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;