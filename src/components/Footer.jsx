import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About</h3>
            <p>Learn more about our company and mission.</p>
            <a href="#">Read More</a>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Get in touch with us for more information.</p>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chais' Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;