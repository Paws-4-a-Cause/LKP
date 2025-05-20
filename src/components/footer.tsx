/* Footer.tsx */
import React from "react";
import "./footer.css";
import logo from "@/assets/LKPLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Branding */}
        <div className="footer-section footer-logo">
          <img src={logo} alt="Love Kuching Project Logo" className="footer-logo-img" />
          <p className="footer-brand">Love Kuching Project</p>
        </div>

        {/* Contact Information */}
        <div className="footer-section footer-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <p>
            <span className="footer-icon" role="img" aria-label="email">📧</span>
            <a href="mailto:fundraising.lovekuchingproject@gmail.com">fundraising.lovekuchingproject@gmail.com</a>
          </p>
          <p>
            <span className="footer-icon" role="img" aria-label="phone">📞</span>
            <a href="tel:+6590031928">+65 9003 1928</a>
          </p>
          <p>
            <span className="footer-icon" role="img" aria-label="location">📍</span>
            178 Joo Chiat Road
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section footer-social">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-links">
            <a href="https://www.facebook.com/luvkuching/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="social-icon" />
            </a>
            <a href="https://x.com/luvkuching/" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com/luvkuching/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Love Kuching. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
