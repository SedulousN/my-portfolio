// App.js
import React from 'react';
import './App.css';
import Header from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import FrontPage from './components/FrontPage';
import ExtraCurriculum from './components/ExtraCurriculum';


function App() {
  return (
    <div className="App">
      <Header />
      <FrontPage />
      <About />
      <Projects />
      <Skills />
      <Education />
      <ExtraCurriculum />
      <Contact />
    </div>
  );
}

export default App;
