// Skills.js
import React from 'react';

const skills = [
  { name: "C/C++", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
  // Add more skills
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.name}:</strong> {skill.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
