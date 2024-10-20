// FrontPage.js
import React from 'react';
import './FrontPage.css';
// import profilePic from './images/profile.png';
import profilePic from './files/asciiArt.png';
import githubicon from './images/github-icon.png';
import linkedinicon from './images/linkedin-icon.png';
import gmailicon from './images/gmail-icon.png';
import backgroundImage from './images/background.jpeg'


const FrontPage = () => {
  const handleNavClick = (sectionId) => {
    const element = document.querySelector(sectionId);
    const navHeight = document.querySelector('.navbar').offsetHeight;

    if (element) {
      window.scrollTo({
        top: element.offsetTop - navHeight,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div className="main-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <img src={profilePic} alt="Profile" className="profile-portrait" />
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work, skills, and projects</p>
        <a onClick={() => handleNavClick('#projects')} className="btn">Explore Projects</a>
      </div>

      <div className="social-icons">
        <a href="https://github.com/SedulousN" target="_blank" rel="noopener noreferrer">
          <img src={githubicon} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/nitin-kumar-singh-2670b4264" target="_blank" rel="noopener noreferrer">
          <img src={linkedinicon} alt="LinkedIn" />
        </a>
        <a href="mailto:nksgbc12@gmail.com">
          <img src={gmailicon} alt="Email" />
        </a>
      </div>
    </div>
  );
};

export default FrontPage;
