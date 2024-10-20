// ExtraCurriculum.js
import React from 'react';
import './ExtraCurriculum.css'; // Custom CSS for styling the extra curriculum section

const ExtraCurriculum = () => {
  return (
    <section id="extra-curriculum" className="extra-section">
      <h2>Extra Curriculum</h2>

      <div className="category">
        <h3>Sports</h3>
        <ul className="list">
          <li>Cricket</li>
          <li>Badminton</li>
          <li>Table Tennis</li>
          <li>Chess</li>
        </ul>
      </div>

      <div className="category">
        <h3>Coursera Certificates</h3>
        <ul className="list">
            <li>
                <a href="https://coursera.org/share/ff388d4b276d34721273281bdeadb786" target="_blank" rel="noopener noreferrer">
                    Data Structures
                </a>
            </li>
            <li>
                <a href="https://coursera.org/share/c7ee2d9477bcced029a09999ab2d8c31" target="_blank" rel="noopener noreferrer">
                  AWS Cloud Technical Essentials
                </a>
            </li>
            <li>
                <a href="https://coursera.org/share/a8df9bd19c106db0b74ff3f07193d392" target="_blank" rel="noopener noreferrer">
                  Python Programming for the Raspberry Pi
                </a>
            </li>
        </ul>
      </div>


      <div className="category">
        <h3>Posts of Responsibility</h3>
        <ul className="list">
          <li>Core Coordinator, Coding Club, JKLU</li>
          <li>Event Coordinator at Sabrang Fest 2023</li>
          <li>Badminton Coordinator, JKLU</li>
        </ul>
      </div>
    </section>
  );
};

export default ExtraCurriculum;
