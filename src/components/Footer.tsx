import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            <span className="footer-brand">MobiusEngine</span>
          </div>

          <div className="footer-info">
            <div className="footer-section">
              <h4 className="footer-heading">Address</h4>
              <p className="footer-text">
                1875 Mission St Ste 103 #4150<br />
                San Francisco, CA 94103
              </p>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Email</h4>
              <a href="mailto:finance@mobiusengine.ai" className="footer-link">
                finance@mobiusengine.ai
              </a>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Telephone</h4>
              <a href="tel:650-889-6026" className="footer-link">
                650-889-6026
              </a>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Socials</h4>
              <div className="footer-socials">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  in
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Mobiusservices LLC</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Terms & Conditions</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
