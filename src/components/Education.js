// Education.js
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>JK Lakshmipat University, Jaipur</h3>
          <p>Bachelor of Technology in Computer Science (Aug 2022 - June 2026)</p>
          <p>CGPA: 8.6</p>
        </div>
        <div className="timeline-item">
          <h3>IIT Gandhinagar</h3>
          <p>Semester Exchange Program (Jan 2024 - May 2024)</p>
        </div>
        <div className="timeline-item">
          <h3>Himalayan International School</h3>
          <p>Intermediate in Science (2019 - 2021)</p>
          <p>Percentage: 81%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
