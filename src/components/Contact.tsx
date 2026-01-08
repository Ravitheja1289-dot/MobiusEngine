import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <p className="contact-label">STILL HAVE<br />DOUBTS?</p>
            <h2 className="contact-title">Contact us</h2>
          </div>
          <button className="contact-button">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
