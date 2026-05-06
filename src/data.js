// src/data.js
// ─── Central data source for Kelvin Olonade's portfolio ───────────────────────

export const personalInfo = {
  name: "Kelvin Olonade",
  role: "RTL Design & Verification Engineer",
  usp: "Bridging foundational device physics with high-performance RTL design — from breadboards to synthesizable IP cores, built from first principles.",
  location: "Lagos, Nigeria",
  university: "University of Lagos",

  contacts: {
    email:    "olonadekelvin@email.com",
    linkedin: "https://linkedin.com/in/olonade-kelvin",
    github:   "https://github.com/olonadekelvin",
    whatsapp: "+2347041877890",
  },

  stats: [
    { value: "3+",   label: "RTL Projects"     },
    { value: "100%", label: "Synthesizable RTL" },
  //  { value: "IEEE", label: "SSCS Founder"      },
    { value: "ASIC", label: "Full Flow"         },
  ],

  about: `My engineering journey began with a soldering iron and hot glue.

Before I ever used a breadboard, I was taking things apart and putting them back together. I learnt by soldering components, improvising mounts with hot glue, figuring out how those tiny parts on the green board worked through trial and error.

That hands‑on start taught me resourcefulness.

Then came an interview where someone asked about breadboards. I'd never formally encountered one. So I asked what it was, and they told me. Then I asked what other boards came before the green board. I learnt about Vero board, perf board, and one more I can't seem to remember — maybe in a next interview. That moment pushed me from raw improvisation into structured learning.

From there, while trying to get a feel for different areas, I went to what I thought was the coolest software: MATLAB. Played with it for as long as I can remember. Saved up for my first STM32 board. Read datasheets selectively. When microcontroller programming started feeling too high‑level, I went lower — into digital logic, Verilog, and RTL design.

What I've built since:

    A synthesizable UART IP core

    A thermal simulator for multi‑core processor architectures

    A firmware‑free flood monitoring system using only configurable logic blocks — no software, no failure points, just hardware

Today I'm working through the full ASIC design flow, from RTL synthesis to static timing analysis. I'm also helping start the first IEEE SSCS Student Chapter at the University of Lagos.

What keeps me going is how everything fits together: logic, circuits, verification, layout, power, timing. There's always a better way to build something. I don't plan to get comfortable.`,
};

// ─── Grouped skill set (replaces flat array) ──────────────────────────────────
export const skillGroups = [
  {
    category: "RTL & Digital Design",
    icon: "⬡",
    skills: [
      "Verilog HDL",
      "RTL Design & Architecture",
      "Finite State Machines (FSM)",
      "Digital Logic Design",
      "UART / Serial Protocol Design",
    ],
  },
  {
    category: "Verification",
    icon: "✓",
    skills: [
      "Cocotb (Python Testbenches)",
      "Icarus Verilog (iverilog)",
      "GTKWave Waveform Analysis",
      "Functional Simulation",
      "Coverage-Driven Verification",
    ],
  },
  {
    category: "Embedded Systems",
    icon: "⚙",
    skills: [
      "Embedded C / C++",
      "STM32 (ARM Cortex-M)",
      "ESP32 (Xtensa LX6)",
      "Peripheral Interfacing",
      "RTOS Fundamentals",
    ],
  },
  {
    category: "Tools & EDA",
    icon: "◈",
    skills: [
      "MATLAB / Simulink",
      "KiCAD",
      "Altium Designer",
      "Linux (RHEL / Ubuntu)",
      "Git & GitHub",
      "ASIC Design Flow (Learning)",
    ],
  },
  {
    category: "Languages",
    icon: "◎",
    skills: [
      "English (Professional Fluency)",
      "Yoruba (Native)",
      "Chinese (Elementary — HSK 1)",
      "German (Elementary — A1)",
    ],
  },
];

// Flat array — legacy export (backward compat)
export const skills = skillGroups.flatMap((g) => g.skills);

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Synthesizable UART TX/RX IP Core",
    category: "RTL / Digital Design",
    featured: true,
    status: "Complete",
    description:
      "Designed a complete, production-quality UART transceiver in synthesizable Verilog HDL. Implemented configurable baud-rate generation, start/stop-bit framing, and parity logic using a clean, latch-free FSM architecture. GTKWave waveform analysis to guarantee cycle-accurate, protocol-compliant data transmission across all operating conditions and edge cases.",
    highlights: [
      "Fully synthesizable RTL — zero inferred latches",
      "Configurable baud rate & parity via parameters",
      "Clean FSM architecture — readable, maintainable RTL",
      "Verified with Icarus Verilog + GTKWave inspection",
    ],
    tags: ["Verilog", "RTL Design", "FSM", "GTKWave", "Icarus Verilog", "UART"],
    primaryLink: "https://github.com/OlonadeKelvin/Synthesizable-UART-Transmitter-Receiver-IP-Core-",
    primaryActionText: "View RTL Source",
  },
  {
    id: 2,
    title: "RTD-Based Cardiac Arrhythmia Detector",
    category: "Computational Electronics",
    featured: false,
    status: "In Progress",
    description:
      "Engineering a novel architecture leveraging the negative differential resistance (NDR) of InGaAs/AlAs heterostructure resonant tunneling diodes for ultra-high-speed cardiac anomaly detection — exploiting quantum tunneling to achieve switching speeds beyond conventional CMOS limits.",
    highlights: [
      "InGaAs/AlAs heterostructure material system",
      "NDR-based bistable switching logic",
      "Targeting sub-picosecond detection latency",
      "Novel quantum device physics application",
    ],
    tags: ["Device Physics", "RTD", "InGaAs/AlAs", "Simulation", "Quantum Devices"],
    primaryLink: "#",
    primaryActionText: "Read Abstract",
  },
  {
    id: 3,
    title: "Thermal Analysis of a Multi-Core Processor",
    category: "Simulation",
    featured: false,
    status: "Complete",
    description:
      "Simulated transient 2D heat conduction in a chip with two switching heat-generating cores to study thermal crosstalk and temperature distribution. Implemented explicit Euler time integration with Dirichlet boundary conditions on a uniform grid; included real-time 2D heatmap and 3D surface visualization. Model is fully parameterized (chip size, grid resolution, material properties, heat flux) and directly applicable to thermal-aware physical design in VLSI.",
    highlights: [
          "Fully parameterized simulation (chip size, grid resolution, material properties, heat flux)",
    "Explicit Euler time integration with Dirichlet boundary conditions",
    "Real‑time 2D heatmap and 3D surface visualization",
    "Models thermal crosstalk between switching cores",
    "Directly applicable to thermal‑aware VLSI physical design"
    ],
    tags: ["Thermal Simulation", "2D Heat Conduction", "Explicit Euler", "MATLAB", "Thermal Crosstalk", "VLSI Physical Design", "Parameterized Modeling"],
    primaryLink: "https://github.com/OlonadeKelvin/Multicore-Processor-Die",
    primaryActionText: "View Design",
  },
  {
    id: 4,
    title: "Firmware-Free Flood Monitor",
    category: "Hardware Design",
    featured: false,
    status: "Complete",
    description:
      "Engineered a deterministic environmental monitoring system built entirely from configurable logic blocks — no microcontroller, no firmware, zero software failure vectors. All sensing, threshold comparison, and alert logic lives in pure combinational and sequential hardware, guaranteeing real-time deterministic response.",
    highlights: [
      "Zero firmware — pure hardware implementation",
      "Deterministic, real-time sensor response",
      "Eliminates all software failure modes",
      "Discrete configurable logic blocks only",
    ],
    tags: ["Digital Logic", "Hardware Design", "Sensors", "Deterministic", "Combinational Logic"],
    primaryLink: "https://drive.google.com/file/d/1sfh2W0jyKlL2Ujsoo_ScYafBcoCoqRog/view?usp=drive_link&usp=embed_facebook",
    primaryActionText: "View Demo",
  },
];
