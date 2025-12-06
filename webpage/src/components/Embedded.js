import React, { useState } from 'react';

const Embedded = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      title: "Sentinel407 - Motion-Activated Alarm System",
      status: "in-progress",
      date: "October 2025 - Present",
      summary: "Ground-up bare-metal alarm system on STM32F407, progressing from HAL to full ARM Assembly implementation.",
      description: "A three-phase embedded systems project demonstrating progressive mastery of ARM Cortex-M4 architecture. Starting with STM32CubeIDE and HAL drivers, the project transitions through register-level C programming and culminates in a complete bare-metal implementation using pure ARM Assembly with custom startup code and linker scripts.",
      features: [
        "Motion detection using EXTI interrupt-driven architecture",
        "PWM-controlled buzzer with configurable alert patterns",
        "Low-power sleep mode with wake-on-motion capability",
        "Hardware debounced push-button with state machine logic",
        "Configurable alarm timeout with automatic reset",
        "UART debugging interface for real-time diagnostics"
      ],
      phases: [
        "Phase 1: HAL-based development in STM32CubeIDE",
        "Phase 2: Direct register manipulation in C",
        "Phase 3: Full bare-metal ARM Assembly with Vim, Make, and GCC toolchain"
      ],
      innovation: "Custom startup and linker files eliminate dependency on vendor libraries. Entirely self-contained firmware demonstrating deep understanding of microcontroller initialization, memory mapping, and interrupt vector tables.",
      impact: "Achieved 25% power reduction through optimized sleep mode implementation; sub-millisecond interrupt response times; complete hardware abstraction layer replacement.",
      tech: ["ARM Cortex-M4", "STM32F407", "ARMv7 Assembly", "C", "Vim", "Makefile", "OpenOCD", "GCC Toolchain"],
      github: null,
      video: null
    },
    {
      id: 2,
      title: "UrbanFloodGuard - Smart Flood Detection System",
      status: "completed",
      date: "Jul 2025",
      summary: "No-code flood monitoring system using PIC16F13145 configurable logic blocks with multi-level alert mechanism.",
      description: "A hardware-centric flood detection solution leveraging the PIC16F13145's Configurable Logic Blocks (CLBs) to implement signal processing and decision logic without traditional software. The system uses capacitive water level sensors to provide graduated alerts through LED indicators, enabling early intervention during flooding events.",
      features: [
        "Code-free implementation using CLB interconnect matrix",
        "Capacitive sensing for reliable water level detection",
        "Three-tier alert system: Normal, Warning, Danger",
        "LED-based visual notification system",
        "Low-power standby operation with rapid wake capability"
      ],
      innovation: "Demonstrates advanced digital logic design using hardware-only implementation. Planned IoT dashboard integration will enable remote monitoring and historical data analytics.",
      impact: "Provides early warning alerts enabling 15-30 minute response windows; eliminates software debugging overhead through pure hardware logic.",
      tech: ["PIC16F13145", "Configurable Logic Blocks", "Capacitive Sensing", "Digital Logic Design", "Circuit Design"],
      github: null,
      video: "https://www.youtube.com/embed/SLURRuQGh4o"
    }
  ];

  return (
    <section id="embedded" data-aos="fade-in" data-aos-duration="1000">
      <h1>Embedded Systems Projects</h1>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div 
            key={project.id} 
            className="project-card" 
            data-aos="fade-up" 
            data-aos-delay={idx * 100}
            onClick={() => toggleProject(project.id)} // 1. Click handler moved here
            style={{ cursor: 'pointer' }} // Visual cue that card is clickable
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

                {project.phases && (
                  <div className="detail-section">
                    <h3>Development Phases</h3>
                    <ul>
                      {project.phases.map((phase, i) => (
                        <li key={i}>{phase}</li>
                      ))}
                    </ul>
                  </div>
                )}

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
                      onClick={(e) => e.stopPropagation()} // 2. Prevents card from closing when clicking link
                    >
                      View on GitHub
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

export default Embedded;