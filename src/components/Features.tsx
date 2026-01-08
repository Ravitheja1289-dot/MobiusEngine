import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit Intake Form'
    },
    {
      number: 2,
      title: 'We do the search and curation for list of jobs'
    },
    {
      number: 3,
      title: 'You approve, we do the tedious part (applying)'
    },
    {
      number: 4,
      title: 'You get the interviews'
    }
  ];

  const features = [
    {
      title: 'Time Tested Trusted',
      description: 'Its so hard in the job market today that we\'ve helped many land jobs since 2020'
    },
    {
      title: 'Real People, Real Help',
      description: 'A friendly service with specialized real people to address your needs daily'
    },
    {
      title: 'Beat the Link',
      description: 'We signify actively working for every job for better odds than posts higher up!'
    }
  ];

  return (
    <>
      {/* How We Work Section */}
      <section className="how-we-work">
        <div className="how-we-work-container">
          <h2 className="how-we-work-title">How we work?</h2>
          <div className="steps-container">
            {steps.map((step) => (
              <div key={step.number} className="step">
                <div className="step-number">{step.number}</div>
                <p className="step-title">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="why-choose-us-container">
          <h2 className="why-choose-us-title">Why Choose Us?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
