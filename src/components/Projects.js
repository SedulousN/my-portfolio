// Projects.js
import React from 'react';

const projects = [
  {
    title: "Analysis of India's Manufacturing Sector",
    description: "Predicted growth and evaluated GDP contribution using Python libraries.",
    techStack: "Python, Pandas, NumPy, Matplotlib",
    githubLink: "https://github.com/SedulousN/Manufacturing-Analysis",
  },
  {
    title: "Gesture-Based Control System",
    description: "Developed a system using hand gestures for controlling volume and media.",
    techStack: "Arduino, PyAutoGUI",
    githubLink: "https://github.com/SedulousN/Gesture-Control",
  },
  // Add more projects
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
