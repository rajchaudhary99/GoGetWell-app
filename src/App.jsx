// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Haro';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import About from './components/aboutUs';
import Mission from './components/mission';
import FAQ from './components/FAQs'
import Contact from './components/contact';

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Mission />
      <HowItWorks />
      <Testimonials />
      
      <CTA />
      <FAQ />
      <Contact />

    </div>
  );
}

export default App;