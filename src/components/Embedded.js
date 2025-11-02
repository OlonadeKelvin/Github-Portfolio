// src/components/Embedded.js
import React, { useState } from 'react';

const Embedded = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="embedded" data-aos="fade-in" data-aos-duration="1000">
      <h1>Embedded Systems Projects</h1>
      <div className="project-grid">
        <div className="project-card" data-aos="fade-up" data-aos-delay="100">
          <h2 onClick={() => toggleProject(1)} className="project-title">
            Sentinel407 Motion-Activated Alarm
          </h2>
          {expandedProject === 1 && (
            <div className="project-details">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>
                STM32F407 with C/Assembly. Impact: 25% power reduction.{' '}
                <a href="https://github.com/yourusername/Sentinel407">Repo</a>
              </p>
              <p>Interactive Demo: Click to simulate alarm trigger.</p>
              <button onClick={() => alert('Alarm triggered!')}>
                Test Motion Detection
              </button>
            </div>
          )}
        </div>

        <div className="project-card" data-aos="fade-up" data-aos-delay="200">
          <h2 onClick={() => toggleProject(2)} className="project-title">
            UrbanFloodGuard
          </h2>
          {expandedProject === 2 && (
            <div className="project-details">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>
                PIC16F13145 sensor system. Impact: Early alerts.{' '}
                <a href="https://github.com/yourusername/UrbanFloodGuard">Repo</a>
              </p>
              <p>Interactive Demo: Simulate flood level.</p>
              <input
                type="range"
                min="0"
                max="100"
                onChange={(e) => alert(`Flood level: ${e.target.value}%`)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Embedded;