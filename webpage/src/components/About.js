// src/components/About.js
import React from 'react';
<img src="/PROFILE.jpg" alt="Profile" className="profile-icon" />

const About = () => {
  return (
    <section id="about" data-aos="fade-in" data-aos-duration="1000">
      <img src={PROFILE} alt="Olonade Kelvin" className="profile-large" />
      <h1>About Me</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Olonade Kelvin Mobolaji is a third-year Electrical and Electronics Engineering student at the University of Lagos, Nigeria. 
        Passionate about electronics, hardware design, and simulations, I specialize in solving complex problems in embedded systems and power engineering. 
        As Deputy Lead in IEEE and SEES-UNILAG, I mentor students on IoT and EV projects. My goal is to contribute to sustainable technologies through internships at companies like Nvidia or Tesla and research publications in power systems.
      </p>
      <p data-aos="fade-up" data-aos-delay="400">
        
      </p>
    </section>
  );
};

export default About;