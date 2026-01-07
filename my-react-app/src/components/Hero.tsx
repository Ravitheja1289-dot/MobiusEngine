import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Land job interviews<br />
            <span className="highlight">10x </span>
            <span className="highlight-white"> faster</span>
          </h1>
          <p className="hero-subtitle">
            Custom-built resumes that match your goals, keywords, and<br />
            recruiter expectations.
          </p>
          <button className="hero-button">
            Get Started →
          </button>
        </div>
        
        <div className="hero-ebook">
          <div className="ebook-container">
            <div className="ebook-cover">
              <div className="ebook-content">
                <h3 className="ebook-year">2024/2025</h3>
                <h2 className="ebook-title">HIRING<br />TRENDS</h2>
                <p className="ebook-description">
                  A job seekers guide to what to expect in 2025 in the new normal of growing tech layoffs.
                </p>
                <div className="ebook-separator"></div>
                <div className="ebook-logo">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="15" stroke="black" strokeWidth="2"/>
                    <path d="M15 20 L25 20 M20 15 L20 25" stroke="black" strokeWidth="2"/>
                  </svg>
                  <span>MOBIUS</span>
                </div>
                <p className="ebook-url">MOBIUSENGINE.AI</p>
              </div>
            </div>
          </div>
          <p className="ebook-download">Download Free E-Book</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
