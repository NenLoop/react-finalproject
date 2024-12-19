// Footer.jsx

import React from 'react';
import "../css/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
