// src/components/HowItWorks.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/HowItWorks.css';

const steps = [
  {
    step: '1',
    title: 'Sign Up',
    description: 'Create your account in minutes with our simple onboarding process.',
    icon: '📝',
    color: '#6366f1' // indigo
  },
  {
    step: '2',
    title: 'Integrate',
    description: 'Connect with your existing EHR systems or start fresh with our platform.',
    icon: '🔌',
    color: '#10b981' // emerald
  },
  {
    step: '3',
    title: 'Customize',
    description: 'Configure the system to match your clinical workflows and preferences.',
    icon: '⚙️',
    color: '#f59e0b' // amber
  },
  {
    step: '4',
    title: 'Go Live',
    description: 'Start using GoGetWell with your patients and see the benefits immediately.',
    icon: '🚀',
    color: '#3b82f6' // blue
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started in just a few simple steps
          </p>
        </div>
        
        <motion.div 
          className="steps-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="step-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              style={{ '--step-color': step.color }}
            >
              <div className="step-number">
                <span>{step.step}</span>
              </div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-underline"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;