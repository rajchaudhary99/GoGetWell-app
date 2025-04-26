import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Mission.css';

const Mission = () => {
  return (
    <section id="mission" className="mission-section">
      <div className="mission-container">
        {/* Main Heading with Decorative Element */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mission-header"
        >
          <h1 className="mission-title">Our Mission</h1>
          <div className="mission-decoration"></div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mission-statement"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mission-text">
            Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.
          </p>
          <p className="mission-subtext">
            We strive to become the leading platform for healthcare tourism management and digital transformation.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mission-features">
          {/* AI-Powered Solutions Card */}
          <motion.div 
            className="feature-card ai-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3V5M15 3V5M9 19V21M15 19V21M5 9H3M5 15H3M21 9H19M21 15H19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19Z" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12H12.01M12 16H12.01" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">AI-Powered Solutions</h3>
            <ul className="feature-list">
              <li className="feature-item">Optimizing operations with advanced technology</li>
              <li className="feature-item">Automated patient matching</li>
              <li className="feature-item">Predictive analytics</li>
            </ul>
          </motion.div>

          {/* Growth Focus Card */}
          <motion.div 
            className="feature-card growth-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Growth Focus</h3>
            <ul className="feature-list">
              <li className="feature-item">Maximizing revenue and opportunities</li>
              <li className="feature-item">Global network expansion</li>
              <li className="feature-item">Performance analytics</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;