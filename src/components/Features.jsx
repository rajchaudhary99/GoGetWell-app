import React from 'react';
import '../Styles/Features.css';

const features = [
  {
    name: 'Predictive Analytics',
    description: 'Our AI predicts patient risks and suggests interventions before issues arise.',
    icon: '📊',
    color: '#6366f1' // indigo-500
  },
  {
    name: 'Automated Documentation',
    description: 'Reduce administrative burden with voice-to-text and smart templates.',
    icon: '📝',
    color: '#10b981' // emerald-500
  },
  {
    name: 'Personalized Care Plans',
    description: 'Generate customized treatment plans based on patient history.',
    icon: '❤️',
    color: '#ef4444' // red-500
  },
  {
    name: 'Real-time Monitoring',
    description: 'Track patient vitals and alerts in real-time from connected devices.',
    icon: '⏱️',
    color: '#3b82f6' // blue-500
  },
  {
    name: 'Clinical Decision Support',
    description: 'Evidence-based recommendations at the point of care.',
    icon: '💡',
    color: '#f59e0b' // amber-500
  },
  {
    name: 'Interoperability',
    description: 'Seamless integration with all major EHR systems.',
    icon: '🔗',
    color: '#8b5cf6' // violet-500
  }
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Powerful Features</h2>
          <p className="features-subtitle">
            Everything you need to modernize your healthcare practice
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon-container">
                <span className="feature-icon">{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.name}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;