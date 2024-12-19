// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Vista</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/homepage">Destinations</Link>
      </div>
    </nav>
  );
};

export default Navbar;
