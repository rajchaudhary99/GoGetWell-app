import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is gogetwell.ai?",
      answer: "GoGetWell is an AI-powered platform designed specifically for healthcare facilitators in medical tourism. We provide intelligent tools to streamline operations, enhance patient experiences, and grow your healthcare business globally."
    },
    {
      question: "What is the AI Front Office for Healthcare Agents?",
      answer: "The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care."
    },
    {
      question: "How does the AI Agent assist me in my healthcare business?",
      answer: "Our AI Agent automates routine tasks like patient inquiries, appointment scheduling, and follow-ups. It also provides data-driven insights to help you optimize your services and improve patient satisfaction."
    },
    {
      question: "Can I customize the website for my healthcare services?",
      answer: "Absolutely! Our platform offers fully customizable website templates with your branding, services, and patient testimonials. No coding required – just drag, drop, and publish."
    },
    {
      question: "How does this platform support independent healthcare facilitators like me?",
      answer: "We specialize in empowering independent practitioners with enterprise-level tools at affordable prices. Our platform handles everything from lead management to payment processing, giving you more time for patient care."
    },
    {
      question: "How does the platform help me manage patient leads?",
      answer: "Our intelligent CRM automatically captures, qualifies, and tracks leads from all channels. It prioritizes high-value inquiries and even handles initial screening questions before routing to you."
    },
    {
      question: "Is it easy to integrate the platform with the hospitals I work with?",
      answer: "Yes! We offer seamless integration with major hospital systems and EMR platforms. Our team handles the technical setup so you can connect with partner hospitals in minutes."
    },
    {
      question: "Is the platform secure and compliant with healthcare regulations?",
      answer: "Security is our top priority. We're HIPAA/GDPR compliant with end-to-end encryption, regular audits, and secure data hosting to protect both your business and patient information."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="faq-header"
        >
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <div className="faq-decoration"></div>
          <p className="faq-subtitle">Find answers to common questions about our platform</p>
        </motion.div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <svg 
                  className={`faq-icon ${activeIndex === index ? 'active' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <motion.div
                className="faq-answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>Still have questions?</p>
          <button className="cta-button">
            Contact Our Support Team
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;