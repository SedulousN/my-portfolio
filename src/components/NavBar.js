// NavBar.js
import React, { useState, useEffect } from 'react';
import './NavBar.css';
import profileimg from './images/profile.png'
import { FaBars } from 'react-icons/fa'; // Hamburger icon from react-icons

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className={`navbar ${showNav ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <img src={profileimg} onClick={() => handleNavClick('#main-section')}/>
        <span>Nitin Kumar Singh</span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><button onClick={() => handleNavClick('#about')}>About Me</button></li>
        <li><button onClick={() => handleNavClick('#projects')}>Projects</button></li>
        <li><button onClick={() => handleNavClick('#skills')}>Skills</button></li>
        <li><button onClick={() => handleNavClick('#education')}>Education</button></li>
        <li><button onClick={() => handleNavClick('#extra-curriculum')}>ExtraCurriculum</button></li>
        <li><button onClick={() => handleNavClick('#contact')}>Contact</button></li>
      </ul>

      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FaBars />
      </button>
    </nav>
  );
};

export default NavBar;
