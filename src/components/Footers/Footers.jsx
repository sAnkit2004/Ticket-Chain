import React from "react";
import "./Footers.css"; // Import the Footer stylesheet

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 Concert Tours. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
