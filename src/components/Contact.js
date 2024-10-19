// Contact.js
import React from 'react';
import './Contact.css'; // Custom CSS for the form and footer

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Write your message here" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      <footer>
        <p>&copy; 2024 Nitin Kumar Singh. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="https://github.com/SedulousN" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/nitin-kumar-singh-2670b4264" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:nksgbc12@gmail.com">Email</a></li>
        </ul>
      </footer>
    </section>
  );
};

export default Contact;
