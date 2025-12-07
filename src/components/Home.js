// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* 1. WELCOME CARD (Uses the Image Texture) */}
      <section id="hero">
        <div className="texture-card texture-hero" data-aos="fade-up">
          <div className="hero-content">
            <h1>Building the Future<br />with Logic & Power.</h1>
            <p>Portfolio of Olonade Kelvin. Electrical Engineer specializing in Embedded Systems and Advanced Simulations.</p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
              <button 
                className="btn-primary" 
                onClick={() => document.getElementById('projects-teaser').scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <a href="https://github.com/olonadekelvin" className="btn-primary secondary">GitHub</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* 2. SKILLS CARD (Uses CSS Hexagon Pattern) */}
      <section id="skills" data-aos="fade-up">
        <h2 className="section-title">Skills Overview</h2>
        <div className="project-grid">
          <div className="texture-card texture-skills">
            <h3>Embedded Systems</h3>
            <p className="project-summary">STM32, PIC, ARM Assembly, C/C++, UART/I2C/SPI, Altium, Proteus.</p>
          </div>
          <div className="texture-card texture-skills">
            <h3>Simulations</h3>
            <p className="project-summary">MATLAB/Simulink, COMSOL, Ansys, Control Theory, Power Systems Analysis.</p>
          </div>
          <div className="texture-card texture-skills">
            <h3>Tools & OS</h3>
            <p className="project-summary">Linux (Bash), Git, Vim, Fusion 360, LaTeX.</p>
          </div>
        </div>
      </section>
      
      {/* 3. PROJECTS & RESUME (Uses CSS Tech Grid Pattern) */}
      <section id="projects-teaser" data-aos="fade-up">
        <h2 className="section-title">Featured Work & Resume</h2>
        <div className="project-grid">
          {/* Project 1 */}
          <div className="texture-card texture-projects">
            <h3>Sentinel407</h3>
            <p className="project-summary">Bare-metal STM32 security system.</p>
            <Link to="/embedded" className="btn-primary">View Embedded</Link>
          </div>
          
          {/* Project 2 */}
          <div className="texture-card texture-projects">
            <h3>Smart Microgrid</h3>
            <p className="project-summary">AI-driven power management sim.</p>
            <Link to="/simulations" className="btn-primary">View Simulations</Link>
          </div>

          {/* Resume Card */}
          <a 
            href={process.env.PUBLIC_URL + "/Resume_OlonadeKelvin.pdf"} 
            download="Resume_OlonadeKelvin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="texture-card texture-projects" 
            style={{textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}
          >
            <h3 style={{marginBottom: '0'}}>Download Resume</h3>
            <p style={{color: 'var(--primary)', marginTop: '0.5rem'}}>PDF Format</p>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;