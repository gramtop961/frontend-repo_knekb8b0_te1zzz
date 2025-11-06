import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import HowItWorks from './components/HowItWorks';
import FeaturesPricing from './components/FeaturesPricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-inter antialiased bg-white">
      <Hero />
      <ValueProps />
      <HowItWorks />
      <FeaturesPricing />
      <Footer />
    </div>
  );
}
