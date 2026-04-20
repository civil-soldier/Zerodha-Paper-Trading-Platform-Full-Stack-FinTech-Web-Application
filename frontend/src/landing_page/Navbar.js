import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Inline Zerodha CSS */}
      <style>{`
        .zerodha-nav {
  background-color: #161625 !important;
  border-bottom: 1px solid #2a2a3d;
  height: auto;
  min-height: 60px;
  font-family: "Inter", sans-serif;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 3000;
  width: 100%;
  padding: 8px 0;
}

.zerodha-container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 0 12px;
  display: flex;
}

.zerodha-nav .nav-link {
  color: #b8b8d6 !important;
  font-weight: 400 !important;
  font-size: clamp(12px, 2vw, 16px);
  letter-spacing: 0.2px;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  height: auto;
  min-height: 44px;
  text-decoration: none;
  padding: 0 8px;
  white-space: nowrap;
}

.zerodha-nav .nav-link:hover {
  color: #a78bfa !important;
}

.navbar-brand img {
  width: clamp(80px, 20vw, 140px);
  height: auto;
  margin-left: 0;
}

.navbar-nav {
  gap: clamp(12px, 2vw, 22px);
  display: flex;
  align-items: center;
}

.navbar-toggler {
  height: auto;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 8px;
}

.navbar-toggler i {
  font-size: clamp(16px, 4vw, 24px);
  color: #a78bfa;
}

.nav-link.dropdown-toggle::after {
  display: none !important;
}

/* Mobile Navbar Fix */
@media (max-width: 991px) {
  .zerodha-nav {
    padding: 0;
    height: auto;
  }

  .navbar-brand img {
    width: 100px;
  }

  .navbar-nav {
    gap: 8px;
    margin-top: 10px;
  }
}

@media (max-width: 576px) {
  .zerodha-nav {
    padding: 6px 0;
    min-height: 56px;
  }

  .navbar-brand img {
    width: 90px;
  }

  .nav-link {
    font-size: 14px;
    min-height: 40px;
    padding: 0 6px;
  }

  .navbar-nav {
    gap: 6px;
  }
}
}
        }
      `}</style>

      {/* Navbar HTML */}
      <nav className="navbar zerodha-nav navbar-expand-lg p-2">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to={"/"}>
            <img src="media/images/logo1.svg" alt="Logo" />
          </Link>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/product"}>
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/community"}>
                  Community
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"/support"}>
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ background: "none", border: "none" }}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
