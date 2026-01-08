import React from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="20" cy="20" rx="15" ry="8" fill="white" opacity="0.9" transform="rotate(-20 20 20)"/>
            </svg>
          </div>
          <span className="logo-text">MobiusEngine</span>
        </div>
        
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li className="dropdown">
            <a href="#more">More</a>
          </li>
        </ul>
        
        <button className="nav-button">Get Started</button>
      </div>
    </nav>
  );
};

export default Navigation;
