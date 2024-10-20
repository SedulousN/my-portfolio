// Skills.js
import React from 'react';
import './Skills.css';
import { FaCode, FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaDatabase, FaGitAlt, FaCogs, FaDraftingCompass } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiScikitlearn, SiMysql } from 'react-icons/si';

const languages = [
  { name: "C/C++", icon: <FaCode />, level: 80, color: "#f94144" }, // 80% level, red color
  { name: "Java", icon: <FaJava />, level: 75, color: "#f3722c" }, // orange
  { name: "Python", icon: <FaPython />, level: 90, color: "#f8961e" }, // yellow-orange
  { name: "HTML", icon: <FaHtml5 />, level: 85, color: "#f9c74f" }, // yellow
  { name: "CSS", icon: <FaCss3 />, level: 80, color: "#90be6d" }, // green
  { name: "JavaScript", icon: <FaJs />, level: 85, color: "#43aa8b" }, // teal
  { name: "SQL", icon: <FaDatabase />, level: 75, color: "#577590" }, // blue
];

const frameworksTools = [
  { name: "Scikit-Learn", icon: <SiScikitlearn />, level: 70, color: "#f94144" },
  { name: "TensorFlow", icon: <SiTensorflow />, level: 65, color: "#f3722c" },
  { name: "Keras", icon: <SiKeras />, level: 60, color: "#f8961e" },
  { name: "Tkinter", icon: <FaCogs />, level: 75, color: "#f9c74f" },
  { name: "Git", icon: <FaGitAlt />, level: 85, color: "#90be6d" },
  { name: "MySQL", icon: <SiMysql />, level: 70, color: "#43aa8b" },
  { name: "CAD", icon: <FaDraftingCompass />, level: 60, color: "#577590" }, // Using FaDraftingCompass for CAD
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="category">
        <h3 className='cat'>Languages</h3>
        <div className="skills-container">
          {languages.map((skill, index) => (
            <div key={index} className="skill-block" style={{ backgroundColor: skill.color }}>
              <div className="icon" style={{ color: '#fff' }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-level-fill" style={{ backgroundColor: darkenColor(skill.color, skill.level), width: `${skill.level}%` }}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="category">
        <h3 className='cat'>Frameworks & Tools</h3>
        <div className="skills-container">
          {frameworksTools.map((skill, index) => (
            <div key={index} className="skill-block" style={{ backgroundColor: skill.color }}>
              <div className="icon" style={{ color: '#fff' }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-level-fill" style={{ backgroundColor: darkenColor(skill.color, skill.level), width: `${skill.level}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Utility function to darken the color based on skill level
const darkenColor = (color, level) => {
  let amt = Math.round((100 - level) * 1.5);
  let usePound = false;
  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }
  let num = parseInt(color, 16);
  let r = (num >> 16) - amt;
  let b = ((num >> 8) & 0x00FF) - amt;
  let g = (num & 0x0000FF) - amt;
  r = r < 255 ? r < 0 ? 0 : r : 255;
  b = b < 255 ? b < 0 ? 0 : b : 255;
  g = g < 255 ? g < 0 ? 0 : g : 255;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

export default Skills;
