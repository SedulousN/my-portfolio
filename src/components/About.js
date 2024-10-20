// About.js
import React from 'react';
import './About.css'; // Custom CSS for styling the About section

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I am Nitin Kumar Singh, a passionate Computer Science student with experience in web development, machine learning, and IoT. Currently pursuing my B.Tech at JK Lakshmipat University, I'm eager to continue building impactful projects and learning new technologies.
        </p>
        {/* <div className="highlights">
          <div className="highlight-box">
            <h3>Education</h3>
            <p>Bachelor of Technology in Computer Science (2022-2026)</p>
          </div>
          <div className="highlight-box">
            <h3>Skills</h3>
            <p>C/C++, Java, Python, HTML, CSS, JavaScript, SQL, TensorFlow, Keras</p>
          </div>
          <div className="highlight-box">
            <h3>Projects</h3>
            <p>Worked on various projects in web development and machine learning</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
