// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section id="hero" data-aos="fade-in" data-aos-duration="1000">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Exploring Embedded Systems and Simulations for a Sustainable Future</p>
          <a href="#projects-teaser" className="cta-button">View Projects</a>
        </div>
      </section>
      
      <section id="skills" data-aos="fade-up" data-aos-duration="800">
        <h2>Skills Overview</h2>
        <div className="skills-grid">
          <div className="skill-card" data-aos="fade-up" data-aos-delay="100">Electronics & Embedded Systems: Low level Programming(C/Assembly), Micro-controllers and Processors, Communication Protocols, Circuit Design, Fabrication, Internet of Things </div>
          <div className="skill-card" data-aos="fade-up" data-aos-delay="200">Simulations: Critical Thinking, Algorithmic Thinking, Data Analysis, Programming Languages(Python, MATLAB, C/C++, R)</div>
          <div className="skill-card" data-aos="fade-up" data-aos-delay="300">Tools: MATLAB, Proteus, Linux, COMSOL, Ansys, Fusion 360, GitHub</div>
          <div className="skill-card" data-aos="fade-up" data-aos-delay="400">Leadership: IEEE Deputy Lead Electronics Society </div>
        </div>
      </section>
      
      <section id="projects-teaser" data-aos="fade-in" data-aos-duration="1000">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card" data-aos="fade-left" data-aos-delay="100">
            <h3>Sentinel407 (Embedded)</h3>
            <p>STM32 alarm with 25% power reduction. <Link to="/embedded">Details</Link></p>
          </div>
          <div className="project-card" data-aos="fade-right" data-aos-delay="200">
            <h3>ODE Visualizer (Simulations)</h3>
            <p>MATLAB app with 98% accuracy. <Link to="/simulations">Details</Link></p>
          </div>
        </div>
      </section>
      
      <section id="resume" data-aos="fade-up" data-aos-duration="800">
        <h2>Resumes</h2>
        <div className="resume-grid">
          <a href="resume-embedded.pdf" className="resume-card" data-aos="fade-up" data-aos-delay="100">Embedded Systems</a>
          <a href="resume-simulations.pdf" className="resume-card" data-aos="fade-up" data-aos-delay="200">Simulations</a>
          <a href="resume-allround.pdf" className="resume-card" data-aos="fade-up" data-aos-delay="300">All-Round</a>
        </div>
      </section>
    </>
  );
};

export default Home;