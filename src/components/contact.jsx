import React, { useState } from 'react';
import { FiPhone, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import '../Styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1>Let's Get in Touch</h1>
          <p className="subtitle">
            Got questions about GoGetWell.Al? Our team is here to help. 
            Contact us for quick and friendly support.
          </p>
        </div>

        {/* Main Content */}
        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="icon-circle">
                <FiPhone className="contact-icon" />
              </div>
              <div className="info-details">
                <h3>Phone</h3>
                <a href="tel:+919811396858" className="info-link">
                  +91 9811396858
                </a>
                <p className="info-description">Available Mon-Fri, 9AM-6PM</p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <FiMail className="contact-icon" />
              </div>
              <div className="info-details">
                <h3>Email</h3>
                <a href="mailto:hello@googlewell.al" className="info-link">
                  hello@googlewell.al
                </a>
                <p className="info-description">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="form-title">Send Us a Message</h2>
            
            <div className="form-group">
              <div className="input-container">
                <FiUser className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <FiMail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <FiMessageSquare className="input-icon" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <div className="contact-footer">
          <div className="footer-content">
            <h3>Connect With Us</h3>
            <div className="policy-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Pricing Policy</a>
              <a href="#">Editor Policy</a>
            </div>
            <p className="copyright">© {new Date().getFullYear()} GoGetWell.Al</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;