// src/components/CTA.jsx
import React from 'react';
import '../Styles/CTA.css'; // Import external CSS

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to transform your healthcare practice?</h2>
        <p className="cta-subtitle">
          Join thousands of healthcare providers using GoGetWell to deliver better patient outcomes.
        </p>
        <div className="cta-button-group">
          <button className="cta-button cta-primary">
            Start Free Trial
          </button>
          <button className="cta-button cta-secondary">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;