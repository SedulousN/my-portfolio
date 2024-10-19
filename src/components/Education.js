// Education.js
import React from 'react';
import './Education.css'; // We'll add animations and hover effects in this CSS file

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="timeline">
        <div className="timeline-item step">
          <div className="circle"></div>
          <div className="content">
            <h3>JK Lakshmipat University, Jaipur</h3>
            <p>Bachelor of Technology in Computer Science (Aug 2022 - June 2026)</p>
            <p>CGPA: 8.6</p>
          </div>
        </div>
        <div className="timeline-item step">
          <div className="circle"></div>
          <div className="content">
            <h3>IIT Gandhinagar</h3>
            <p>Semester Exchange Program (Jan 2024 - May 2024)</p>
          </div>
        </div>
        <div className="timeline-item step">
          <div className="circle"></div>
          <div className="content">
            <h3>Himalayan International School</h3>
            <p>Intermediate in Science (2019 - 2021)</p>
            <p>Percentage: 81%</p>
          </div>
        </div>
        <div className="timeline-item step">
          <div className="circle"></div>
          <div className="content">
            <h3>St. Paul's High School</h3>
            <p>Matriculation (2019)</p>
            <p>Percentage: 92%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
