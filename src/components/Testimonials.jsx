// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Testimonials.css';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';

const testimonials = [
  {
    quote: "GoGetWell reduced our documentation time by 40% and improved our patient satisfaction scores significantly.",
    name: "Dr. Sarah Johnson",
    title: "Chief Medical Officer, HealthPlus",
    avatar: profile1
  },
  {
    quote: "The predictive analytics have helped us identify at-risk patients weeks before we would have normally noticed.",
    name: "Michael Chen",
    title: "Director of Nursing, City General",
    avatar: profile2
  },
  {
    quote: "Implementation was seamless and the ROI was evident within the first quarter of use.",
    name: "Lisa Rodriguez",
    title: "Practice Manager, Family Care Clinic",
    avatar: profile1
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const starVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15
    }
  }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="testimonials-header"
        >
          <h2 className="testimonials-title">Trusted by Healthcare Professionals</h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="testimonials-grid"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="testimonial-card"
            >
              <div className="quote-container">
                <motion.div
                  variants={starVariants}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="star-icon"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                      fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
                <p className="quote-text">{testimonial.quote}</p>
              </div>
              <motion.div 
                className="author-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <motion.img 
                  className="author-avatar"
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <div className="author-info">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-title">{testimonial.title}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;