import React from "react";
import { Link } from "react-router-dom";

function CommunityPage() {
  return (
    <div className="community-wrapper">

      {/* ================= HERO SECTION ================= */}
      <div className="community-hero">
        <div className="community-section community-hero-section">

          {/* LEFT TEXT */}
          <div className="community-text">
            <span className="community-badge">🌍 Community First</span>
            <h1>Free. Open. Built for learners.</h1>
            <p>
              Arthiq is a free and community-driven paper trading platform
              designed to help students and aspiring traders learn the markets
              without financial risk.
            </p>
          </div>

        </div>
      </div>

      {/* ================= WHY FREE ================= */}
      <div className="community-section reverse">

        <div className="community-text">
          <h2>Why is Arthiq free?</h2>

          <div className="feature-block">
            <h4>Accessible Markets</h4>
            <p>Markets should not be limited by capital.</p>
          </div>

          <div className="feature-block">
            <h4>Risk-Free Learning</h4>
            <p>Practice without fear of losing real money.</p>
          </div>

          <div className="feature-block">
            <h4>No Hidden Costs</h4>
            <p>No subscriptions. No brokerage. No monetization traps.</p>
          </div>

          <div className="feature-block">
            <h4>Pure Education Focus</h4>
            <p>Built for learning — not extracting fees.</p>
          </div>
        </div>

        <div className="community-image">
          <img src="/media/images/community-free.svg" alt="Why Free" />
        </div>
      </div>

      {/* ================= BUILT FOR COMMUNITY ================= */}
      <div className="community-section">

        <div className="community-text">
          <h2>Built for the community</h2>

          <div className="feature-block">
            <h4>Transparent Codebase</h4>
            <p>The architecture is clean, structured, and extensible.</p>
          </div>

          <div className="feature-block">
            <h4>Open Contributions</h4>
            <p>Feature ideas, improvements, and feedback are welcome.</p>
          </div>

          <div className="feature-block">
            <h4>Modern Full-Stack Architecture</h4>
            <p>Built using React, Node.js, Express, and MongoDB.</p>
          </div>

          <div className="feature-block">
            <h4>Designed for Experimentation</h4>
            <p>A safe playground for testing ideas and strategies.</p>
          </div>
        </div>

        <div className="community-image">
          <img src="/media/images/community-dev.svg" alt="Community Developers" />
        </div>
      </div>

      {/* ================= DISCLAIMER ================= */}
      <div className="disclaimer">
        <h4>Important Disclaimer</h4>
        <p>
          Arthiq is an independent educational project.
          It is not a brokerage platform and does not execute real trades.
          Arthiq is not affiliated with any financial institution or brokerage entity.
          All trading activity is simulated using virtual capital.
        </p>
      </div>

      {/* ================= CTA ================= */}
      <div className="community-cta">
        <h2>Ready to start learning?</h2>

        <div className="cta-buttons">
          <a
            href="https://github.com/civil-soldier/Zerodha-Paper-Trading-Platform-Full-Stack-FinTech-Web-Application"
            target="_blank"
            rel="noreferrer"
            className="glow-button"
          >
            View on GitHub
          </a>

          <Link to="/signup" className="glow-button secondary">
            Start Trading Free
          </Link>
        </div>
      </div>

    </div>
  );
}

export default CommunityPage;