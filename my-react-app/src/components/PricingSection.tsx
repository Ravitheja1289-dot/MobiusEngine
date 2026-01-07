import React from 'react';
import './PricingSection.css';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'April Promo',
      price: 35,
      period: 'month',
      features: [
        'Curated jobs from 50+ boards',
        'Rapid document creation & refinement',
        'Many AI-powered applied 10 per day',
        'Interview prep - Nail your pitch',
        'Monthly bonus',
        'Rigorous dedicated application services',
        'Access to our job portal with 25 filters'
      ]
    },
    {
      name: 'Starter',
      badge: 'Popular',
      price: 50,
      period: 'month',
      features: [
        '25 human AI led Resume Plus',
        'Regular service from career advisors',
        'Assistance search & Many document types',
        '10 refined resumes',
        'Entire team at 100 clients',
        'AI-Only 5 complete job 4 Forms',
        'Dedicated expert 5 + bonuses'
      ]
    },
    {
      name: 'Plus',
      price: 100,
      period: 'month',
      features: [
        'Everything in Starter, while concise versions',
        'Up to 10 targeted sends',
        'Access to our Pitch',
        'Unlimited forms and resume refinement'
      ]
    }
  ];

  const advancePlan = {
    name: 'Advance',
    price: 150,
    period: 'month',
    features: [
      'Everything in Plus',
      'Custom Resume & Email Setup',
      'All help plus application services (50+ platforms)',
      'High ROI + monthly premium benefits'
    ],
    bonuses: [
      'Access to career resume builder + Sample',
      'Lifetime referrals & Cover Letters'
    ]
  };

  const services = [
    {
      name: 'Resume Rebuild',
      description: 'Recreate from the base up, just off ideas and send us your old resume',
      price: 1000,
      period: 'one time',
      features: [
        'AI: All ATS consulting',
        'Personalized counseling: for understanding resume',
        '1-on-1 evaluation when no Specific format',
        'Expertise on major industries, compliant for large + enterprise',
        'Strategic targeted career as resume into key companies',
        'Structured multiple revision in duration (if clients within 14 business days)'
      ]
    },
    {
      name: 'Interview Prep',
      description: 'Our vision is to help you nail your job and tell you most important topics',
      price: 500,
      period: 'one time',
      features: [
        '1-to-1 HACS interviewing with our career experts',
        'Mock interview scheduling',
        'Real industry company & domain performance',
        'Full advice pod optimizing charts - transition in career'
      ]
    }
  ];

  return (
    <>
      {/* Pricing Plans Section */}
      <section className="pricing">
        <div className="pricing-container">
          <h2 className="pricing-title">Job Application Service Plans</h2>
          
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className="pricing-card">
                {plan.badge && <span className="pricing-badge">{plan.badge}</span>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">${plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="plan-button">Get Started ➜</button>
              </div>
            ))}
          </div>

          <div className="advance-plan">
            <div className="advance-content">
              <div className="advance-info">
                <h3 className="plan-name">{advancePlan.name}</h3>
                <ul className="plan-features">
                  {advancePlan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="advance-bonuses">
                  {advancePlan.bonuses.map((bonus, idx) => (
                    <div key={idx} className="bonus-item">
                      <span className="bonus-icon"></span>
                      {bonus}
                    </div>
                  ))}
                </div>
              </div>
              <div className="advance-pricing">
                <div className="advance-price">
                  <span className="price">${advancePlan.price}</span>
                  <span className="period">/{advancePlan.period}</span>
                </div>
                <button className="plan-button">Get Started ➜</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Resume Building & Coaching</h2>
            <p className="services-subtitle">
              Let our resume writers do the heavy lifting — and you can choose the most relevant experience.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-price">
                  <span className="price">${service.price}</span>
                  <span className="period"> {service.period}</span>
                </div>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="service-button">Get Started ➜</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;
