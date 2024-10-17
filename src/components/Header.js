// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Nitin Kumar Singh</h1>
      <p>Email: <a href="mailto:nksgbc12@gmail.com">nksgbc12@gmail.com</a></p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
