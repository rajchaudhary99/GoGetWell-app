import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img 
            src="https://gogetwell.ai/img/logo/logo-dark-full.png" 
            alt="GoGetWell" 
            className="navbar-logo" 
          />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`menu-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a 
            href="#about" 
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="link-text">About Us</span>
            <span className="link-underline"></span>
          </a>
          <a 
            href="#faq" 
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="link-text">FAQ</span>
            <span className="link-underline"></span>
          </a>
          <a 
            href="#Contact" 
            className="navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="link-text">Contact Us</span>
            <span className="link-underline"></span>
          </a>
        </div>
        
        <button className="navbar-button">
          <span className="button-text">Get Started</span>
          <span className="button-arrow">→</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;