// Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Custom CSS for the form and footer
import Resume from './files/Resume-3.pdf'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Using Formspree's API for submission
    fetch('https://formspree.io/f/mjkvkvyy', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset(); // Clear form fields after successful submission
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="thank-you-message">Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      )}

      <footer>
        <p>&copy; 2024 Nitin Kumar Singh. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="https://github.com/SedulousN" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/nitin-kumar-singh-2670b4264" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:nksgbc12@gmail.com">Email</a></li>
          <li><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
        </ul>
      </footer>
    </section>
  );
};

export default Contact;
