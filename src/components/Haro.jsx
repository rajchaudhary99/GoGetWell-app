import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-tagline">Website Builder</div>
          <h1 className="hero-title">For Healthcare Facilitators</h1>
          <p className="hero-subtitle">
            Create AI Store in 2 min<br />
            Boost Patients Conversion and Earn While Sleeping
          </p>
          <button className="hero-button">
            Get Started
            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2100+</span>
              <span className="stat-label">Qualified Doctors</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Hospitals</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">800+</span>
              <span className="stat-label">AI Treatment Plans</span>
            </div>
          </div>
        </div>
        
        <div className="hero-demo">
          <div className="demo-card">
            <div className="demo-header">
              <div className="demo-header-content">
                <h3 className="demo-title">Medical Report Analysis</h3>
                <span className="demo-subtitle">AI-Powered Insights</span>
              </div>
              <span className="demo-badge">
                <span className="badge-dot"></span>
                gogetwell.ai
              </span>
            </div>
            
            <div className="demo-content">
              <div className="demo-feature-list">
                <div className="demo-feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <span className="feature-title">Sewald AI Front Office</span>
                    <span className="feature-desc">Automated patient intake system</span>
                  </div>
                </div>
                
                <div className="demo-feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <span className="feature-title">AI Data Analysis</span>
                    <span className="feature-desc">Real-time patient data processing</span>
                  </div>
                </div>
                
                <div className="demo-feature">
                  <div className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <span className="feature-title">Secure Sharing</span>
                    <span className="feature-desc">HIPAA-compliant file transfer</span>
                  </div>
                </div>
              </div>
              
              <div className="demo-visual">
                <div className="visual-graph">
                  <div className="graph-bar" style={{ height: '60%' }}></div>
                  <div className="graph-bar" style={{ height: '80%' }}></div>
                  <div className="graph-bar" style={{ height: '45%' }}></div>
                  <div className="graph-bar" style={{ height: '90%' }}></div>
                  <div className="graph-bar" style={{ height: '70%' }}></div>
                </div>
                <div className="visual-label">AI Analysis Results</div>
              </div>
            </div>
            
            <div className="demo-footer">
              <div className="demo-progress">
                <div className="progress-bar"></div>
              </div>
              <div className="demo-pagination">
                <span className="pagination-current">1</span>
                <span className="pagination-divider">/</span>
                <span className="pagination-total">3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;