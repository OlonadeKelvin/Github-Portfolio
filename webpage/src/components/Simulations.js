import React, { useState } from 'react';

const Simulations = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      title: "Microgrid & Energy Storage Management System (EMS)",
      status: "in-progress",
      date: "Dec 2025 - Present",
      summary: "Utility-scale grid simulation managing renewable and dispatchable power sources with intelligent frequency and voltage regulation.",
      description: "A comprehensive utility-scale grid simulation that orchestrates three distinct power sources: stochastic generators (Wind/Solar) and dispatchable systems (Diesel/Battery). The system employs adaptive control logic to maintain grid frequency stability at 50/60Hz and regulate voltage during critical events such as load shedding and intermittent cloud cover.",
      features: [
        "Real-time frequency regulation maintaining ±0.5Hz tolerance during 50% load spikes",
        "Intelligent peak shaving algorithm achieving 22% LCOE optimization",
        "Battery sizing validation ensuring 99.9% grid uptime",
        "Dynamic load balancing across PV arrays, wind turbines, and backup generators"
      ],
      innovation: "Exploring integration of Reinforcement Learning agents via MATLAB's RL Toolbox to replace hard-coded switching logic with adaptive decision-making. Future work includes island mode simulation for disaster recovery scenarios.",
      impact: "Optimizes Levelized Cost of Energy by 22%; maintains frequency stability within ±0.5Hz during extreme load variations; validates battery capacity for 99.9% uptime guarantee.",
      tech: ["MATLAB/Simulink", "Power Systems Analysis", "Control Theory", "RL Toolbox"],
      github: null,
      video: null
    },
    {
      id: 2,
      title: "Self-Stabilizing Inverted Pendulum Robot",
      status: "completed",
      date: "Jan 2025",
      summary: "Control systems implementation demonstrating real-time balance control using PID and LQR feedback mechanisms.",
      description: "Simulink-based model of a self-balancing robot represented as an inverted pendulum on a cart system. The project implements advanced feedback control strategies (PID/LQR) to achieve dynamic equilibrium by continuously adjusting cart position in response to pendulum angle deviations.",
      features: [
        "Nonlinear dynamic modeling with Lagrangian mechanics",
        "Comparative analysis of PID vs LQR control performance",
        "Real-time system response visualization with phase portraits",
        "Disturbance rejection capabilities under external perturbations"
      ],
      innovation: "Implements state-space control techniques commonly found in autonomous vehicles, two-wheeled robots, and drone stabilization systems.",
      impact: "Demonstrates fundamental control concepts applicable to robotics and automation; achieves sub-second stabilization response times.",
      tech: ["MATLAB/Simulink", "Control Systems", "State-Space Analysis", "LQR/PID"],
      github: "https://github.com/OlonadeKelvin/MATLAB_Projects/tree/main/Simulink/Self-Balancing",
      video: null
    },
    {
      id: 3,
      title: "Differential Equation Visualizer",
      status: "completed",
      date: "May 2025",
      summary: "Interactive MATLAB application for simulating and visualizing ordinary differential equations with real-time parameter adjustment.",
      description: "An educational tool designed for students, educators, and engineers to explore the behavior of first, second, and third-order ODEs. Features an intuitive GUI for defining custom equations, setting initial conditions, and observing time-domain responses using industry-standard numerical solvers.",
      features: [
        "Support for ODEs up to third order with custom MATLAB syntax input",
        "Dual solver options (ode45/ode23) for accuracy-speed tradeoffs",
        "Interactive state variable plotting with customizable time spans",
        "Export functionality for integration with research workflows"
      ],
      innovation: "Bridges the gap between theoretical differential equations and practical system behavior through interactive visualization.",
      impact: "Provides 98% numerical accuracy compared to analytical solutions; reduces learning curve for complex ODE systems.",
      tech: ["MATLAB App Designer", "Numerical Methods", "UI/UX Design", "ODE Solvers"],
      github: "https://github.com/OlonadeKelvin/MATLAB_Projects/tree/main/APP%20Development",
      fileexchange: "https://www.mathworks.com/matlabcentral/fileexchange/181160-differential_equation_visualizer"
    }
  ];

  return (
    <section id="simulations" data-aos="fade-in" data-aos-duration="1000">
      <h1>Simulations & Modeling</h1>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className="project-card" 
            data-aos="fade-up" 
            data-aos-delay={idx * 100}
            onClick={() => toggleProject(project.id)} // 1. Click handler on parent
            style={{ cursor: 'pointer' }} // Visual cue
          >
            <div className="project-header">
              <h2 className="project-title">
                {project.title}
              </h2>
              {project.status === 'in-progress' && (
                <span className="project-status in-progress">In Progress</span>
              )}
            </div>
            <p className="project-date">{project.date}</p>
            <p className="project-summary">{project.summary}</p>

            {expandedProject === project.id && (
              <div className="project-details">
                {project.video && (
                  <iframe
                    width="100%"
                    height="315"
                    src={project.video}
                    frameBorder="0"
                    allowFullScreen
                    title={project.title}
                    style={{ marginBottom: '1rem' }}
                  ></iframe>
                )}

                <div className="detail-section">
                  <h3>Overview</h3>
                  <p>{project.description}</p>
                </div>

                <div className="detail-section">
                  <h3>Key Features</h3>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h3>Innovation & Future Work</h3>
                  <p>{project.innovation}</p>
                </div>

                <div className="detail-section">
                  <h3>Impact</h3>
                  <p><strong>{project.impact}</strong></p>
                </div>

                <div className="tech-tags">
                  {project.tech.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // 2. Stop propagation
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.fileexchange && (
                    <a 
                      href={project.fileexchange} 
                      className="project-link secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // 2. Stop propagation
                    >
                      MATLAB File Exchange
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Simulations;