// Projects.js
import React, { useState } from 'react';
import './Projects.css'; // Custom CSS for projects
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Icons for navigation

import manufacturingImg from './images/manufacturing.jpg';
import gestureControlImg from './images/gesture-control.png';
import sabrangDatabaseImg from './images/sabrang-database.png';

const projectData = [
  {
    name: "Analysis of India's Manufacturing Sector",
    description: "Forecasted growth and GDP contribution using Python.",
    tools: "Python, Pandas, NumPy",
    image: manufacturingImg,
    github: "https://github.com/SedulousN/Manufacturing-Analysis",
  },
  {
    name: "Gesture-Based Control System",
    description: "Hand gestures used for media control using Arduino.",
    tools: "Arduino, Ultrasonic Sensors, PyAutoGUI",
    image: gestureControlImg,
    github: "https://github.com/SedulousN/Gesture-Control",
  },
  {
    name: "Sabrang Events Database",
    description: "Developed a database system to manage event logistics.",
    tools: "MySQL, ER Diagrams",
    image: sabrangDatabaseImg,
    github: "https://github.com/SedulousN/Sabrang-Database",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projectData[currentIndex];
  const prevProject = projectData[(currentIndex === 0 ? projectData.length - 1 : currentIndex - 1)];
  const nextProject = projectData[(currentIndex === projectData.length - 1 ? 0 : currentIndex + 1)];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-carousel">
        <button className="arrow-btn left-arrow" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        <div className="project-cards">
          {/* Previous Project (partially visible) */}
          <div className="project-card prev-card">
            <img src={prevProject.image} alt={prevProject.name} className="project-image" onClick={handlePrev}/>
            <h3>{prevProject.name}</h3>
          </div>

          {/* Current Project (fully visible) */}
          <div className="project-card main-card">
            <img src={currentProject.image} alt={currentProject.name} className="project-image" />
            <h3>{currentProject.name}</h3>
            <p>{currentProject.description}</p>
            <p><strong>Tools:</strong> {currentProject.tools}</p>
            <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>

          {/* Next Project (partially visible) */}
          <div className="project-card next-card">
            <img src={nextProject.image} alt={nextProject.name} className="project-image" onClick={handleNext}/>
            <h3>{nextProject.name}</h3>
          </div>
        </div>

        <button className="arrow-btn right-arrow" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Projects;
