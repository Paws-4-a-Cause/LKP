import React from "react";
import "./footer.css";
import logo from "@/assets/LKPLogo.png"

// Define the Footer component
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Love Kuching Project Logo" className="footer-logo-img" />
      </div>

      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: fundraising.lovekuchingproject@gmail.com</p>
          <p>Phone: +65 9003 1928</p>
          <p>Address: 178 joo chiat road</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/luvkuching/" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://x.com/luvkuching/" target="_blank" rel="noopener noreferrer"> X</a> |
          <a href="https://www.instagram.com/luvkuching/?hl=en" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </div>

        
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Love Kuching. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
