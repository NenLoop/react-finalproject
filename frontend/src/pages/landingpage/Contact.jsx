import React from "react";
import Navbar from "../../components/Navbar.jsx"
import "../../css/Contact.css"
import "../../css/Navbar.css"; // Import Navbar CSS to ensure the navbar styles are applied

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Add Navbar here */}
      <Navbar />

      {/* Main Contact Section */}
      <div className="contact-container">
        {/* Left Side: Image Section */}
        <div className="image-container">
          <img
            src="https://www.exploreshaw.com/wp-content/uploads/2019/04/DSCF9807.jpg"
            alt="Scenic Location"
            className="contact-main-image"
          />
        </div>

        {/* Right Side: Contact Form Section */}
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>
            Km. 4 infront of Aeon Tower, Back of d.I.p.c, Bajada, brgy. 19-b
            Davao City, Philippines
          </p>
          <p>
            <span>📞</span> Phone: +639486946841
          </p>
          <p>
            <span>✉️</span> vista.philippines@gmail.com
          </p>

          {/* Map Image */}
          <div className="map-container">
            <img
              src="https://media.streets.mn/wp-content/uploads/2013/10/Screen-shot-2013-10-27-at-10.51.49-PM.png"
              alt="Map Location"
              className="map-image"
            />
          </div>

          {/* Form */}
          <form className="contact-form">
            <p>Get in touch with us, send us a message:</p>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#FAQ">FAQ</a>
          <a href="#Terms">Terms Of Services</a>
          <a href="#Privacy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
