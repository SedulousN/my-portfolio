// NavBar.js
import React, { useState, useEffect } from 'react';
import './NavBar.css';
import profileimg from './images/profile.png'

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <nav className={`navbar ${showNav ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <img src={profileimg} />
        <span>Nitin Kumar Singh</span>
      </div>
      <ul className="nav-links">
        <li><button onClick={() => handleNavClick('#about')}>About</button></li>
        <li><button onClick={() => handleNavClick('#projects')}>Projects</button></li>
        <li><button onClick={() => handleNavClick('#skills')}>Skills</button></li>
        <li><button onClick={() => handleNavClick('#education')}>Education</button></li>
        <li><button onClick={() => handleNavClick('#contact')}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
