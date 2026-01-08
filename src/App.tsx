// import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Features />
      <AboutSection />
      <PricingSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
