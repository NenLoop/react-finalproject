import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Vista</div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/homepage" className="nav-link">
              Destinations
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
