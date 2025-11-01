import React, { useState } from 'react';

const Simulations = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="simulations" data-aos="fade-in" data-aos-duration="1000">
      <h1>Simulations Projects</h1>
      <div className="project-grid">
        <div className="project-card" data-aos="fade-up" data-aos-delay="100">
          <h2 onClick={() => toggleProject(1)} className="project-title">
            Differential Equation Visualizer
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
                MATLAB ODE app. Impact: 98% accuracy.{' '}
                <a href="https://github.com/yourusername/ODEVisualizer">Repo</a>
              </p>
              <p>Interactive Demo: Adjust parameters (simplified slider).</p>
              <input
                type="range"
                min="0"
                max="10"
                onChange={(e) => alert(`Time span: ${e.target.value} hours`)}
              />
            </div>
          )}
        </div>

        <div className="project-card" data-aos="fade-up" data-aos-delay="200">
          <h2 onClick={() => toggleProject(2)} className="project-title">
            Lorenz System Solver
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
                Chaotic dynamics model. Impact: Physics validation.{' '}
                <a href="https://github.com/yourusername/LorenzSolver">Repo</a>
              </p>
              <p>Interactive Demo: Change initial conditions.</p>
              <button onClick={() => alert('Trajectory updated!')}>
                Randomize Conditions
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Simulations;