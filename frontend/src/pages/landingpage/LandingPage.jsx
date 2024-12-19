import React from "react";
import { Link } from "react-router-dom";
import  Navbar  from "../../components/Navbar.jsx"
import "../../css/HeroSection.css"

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Add Navbar here */}
      <Navbar />

      <div className="hero-content">
        <h1 className="hero-title">
          Travel where <br /> <span className="highlight">you want</span>
        </h1>
      </div>
      <p className="hero-description">
        Vista offers a platform to discover and explore the best tourist spots in the Philippines.
      </p>
      <div className="hero-buttons">
        <button className="visit-btn">Visit us</button>
        <Link to="/signup">
          <button className="sign-up-btn">Sign Up</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
