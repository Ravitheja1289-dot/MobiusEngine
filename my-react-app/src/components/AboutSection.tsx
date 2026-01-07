import React from 'react';
import './AboutSection.css';
import ashwinImage from '../assets/download.jpg';
import nicoleImage from '../assets/download (1).jpg';

const AboutSection: React.FC = () => {
  const team = [
    {
      name: 'Ashwin',
      image: ashwinImage,
      description: 'is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.',
      additionalInfo: 'Ashwin\'s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.'
    },
    {
      name: 'Nicole',
      image: nicoleImage,
      description: 'is an Executive coach at Mobius specializing in resume builds and career advisory.',
      additionalInfo: 'With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.'
    }
  ];

  const testimonials = [
    {
      text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
      name: "Holly",
      role: "Senior Executive",
      company: "Google"
    },
    {
      text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
      name: "Holly",
      role: "Senior Executive",
      company: "Microsoft"
    },
    {
      text: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
      name: "Holly",
      role: "Senior Executive",
      company: "Amazon"
    }
  ];

  return (
    <>
      {/* About Us Section */}
      <section className="about-us">
        <div className="about-us-container">
          <h2 className="about-us-title">About Us</h2>
          <div className="team-cards">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image-container">
                  <img src={member.image} alt={member.name} className="member-image" />
                </div>
                <div className="member-info">
                  <p className="member-description">
                    <strong>{member.name}</strong> {member.description}
                  </p>
                  <p className="member-additional">{member.additionalInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-container">
          <h2 className="testimonials-title">What our clients have to say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="play-icon">▶</div>
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-footer">
                    <div className="company-logo">{testimonial.company}</div>
                    <div className="arrow-icon">↗</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-buttons">
            <button className="btn-secondary">EXPLORE TESTIMONIALS</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
