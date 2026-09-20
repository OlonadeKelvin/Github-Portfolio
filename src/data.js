// src/data.js
// ─── Central data source for Kelvin Olonade's portfolio ───────────────────────

export const personalInfo = {
  name: "Kelvin Olonade",
  role: "Mixed-Signal IC Designer",
  usp: "From breadboards to GDS. Two chips through the full open-source flow on SkyWater 130nm, and now drawing transistors in IHP 130nm and GF180MCU.",
  location: "Lagos, Nigeria",
  university: "University of Lagos",
 
  contacts: {
    email:    "olonadekelvin@gmail.com",
    linkedin: "https://linkedin.com/in/olonade-kelvin",
    github:   "https://github.com/olonadekelvin",
    whatsapp: "+2347041877890",
  },
 
  stats: [
    { value: "2",          label: "Chips Taped Out" },
    { value: "4",          label: "Chips In Design" },
    { value: "RTL to GDS", label: "Open-Source Flow" },
  ],

  about: `My engineering journey began with a soldering iron and hot glue.

Before I ever used a breadboard, I was taking things apart and putting them back together. I learnt by soldering components, improvising mounts with hot glue, figuring out how those tiny parts on the green board (PCB) worked through trial and error.

That hands‑on start taught me a bit about resourcefulness.

A later time, I was in an interview, though not formal and was asked about breadboards. I've not encountered one before. So I asked what it was, and they told me. Then I asked what other boards came before the final green board. I learnt about Vero board, perf board, and one more I can't seem to remember. That moment pushed me from raw improvisation into structured learning.

From there, while trying to get a feel for different areas, I went to what I thought was the coolest software: MATLAB. Played with it for as long as I can remember. Saved up for my first STM32 board. Read datasheets selectively. Then microcontroller programming started feeling too high‑level, I went lower, into digital logic, Verilog, and RTL design.
 
Two of my designs have been through the full open-source ASIC flow and taped out on SkyWater 130nm, a generative VGA synthesizer and an EEPROM wear-leveling controller, both carried from RTL to GDS. Seeing my own layout come back as a real GDS file was the point where the analog side stopped looking like someone else's job.
 
So now I draw transistors too. Right now I'm finishing a temperature-sensor front end in IHP 130nm for a HeiChips tapeout this September, where a bad first guess at the input stage cost me about 2.5 °C of accuracy, finding out why and fixing it properly bought back a 26× improvement. I'm also on two team chips: the charge pump and loop filter for a ring-oscillator PLL, and the comparator plus its layout for a 10-bit SAR ADC.
 
Along the way I founded the first IEEE SSCS Student Chapter at the University of Lagos, and I've been selected for a research internship at Feng Chia University in Taiwan working on machine-learning-assisted FinFET layout.
 
What keeps me going is how everything fits together: logic, circuits, verification, layout, power, timing. There's always a better way to build something. I don't plan to get comfortable.`,
};

export const skillGroups = [
  {
    category: "Analog & Mixed-Signal Design",
    icon: "◐",
    skills: [
      "Full-Custom Transistor-Level Design",
      "Relaxation Oscillators & Schmitt Triggers",
      "Charge Pumps & Passive Loop Filters",
      "Dynamic-Latch Comparators",
      "Current Mirrors & Cascode Biasing",
      "PVT Corner & Monte Carlo Analysis",
    ],
  },
  {
    category: "RTL & Digital Design",
    icon: "⬡",
    skills: [
      "Verilog & SystemVerilog",
      "RTL Design & Microarchitecture",
      "Finite State Machines (FSM)",
      "AHB-Lite Bus Design",
      "QSPI Memory Controllers",
      "UART / SPI / Serial Protocols",
    ],
  },
  {
    category: "Verification",
    icon: "✓",
    skills: [
      "Cocotb (Python Testbenches)",
      "Self-Checking SystemVerilog Testbenches",
      "Python Golden Models",
      "Functional & Code Coverage",
      "Gate-Level & SDF-Annotated Simulation",
      "Icarus Verilog, Verilator, GTKWave",
    ],
  },
  {
    category: "Physical Design & EDA",
    icon: "◈",
    skills: [
      "OpenLane / OpenROAD / Yosys",
      "ngspice & Xschem",
      "Magic, KLayout, Netgen",
      "Static Timing Analysis",
      "Floorplanning, Place & Route",
      "DRC, LVS, Parasitic Extraction, GDS",
    ],
  },
  {
    category: "Process Nodes",
    icon: "▦",
    skills: [
      "SkyWater SKY130",
      "IHP SG13G2 / SG13CMOS5L (130nm)",
      "GlobalFoundries GF180MCU",
      "Tiny Tapeout Shuttle Flows",
    ],
  },
  {
    category: "Embedded Systems",
    icon: "⚙",
    skills: [
      "Embedded C / C++",
      "RISC-V Assembly & Bare-Metal Firmware",
      "STM32 (ARM Cortex-M)",
      "ESP32 (Xtensa LX6)",
      "Raspberry Pi 4B / 5 & Hailo-8 Edge AI",
      "Peripheral Interfacing",
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "◇",
    skills: [
      "Python (NumPy, Matplotlib)",
      "Bash Simulation Harnesses",
      "MATLAB / Simulink",
      "KiCAD & Altium Designer",
      "Linux (RHEL / Ubuntu)",
      "Git & GitHub",
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
  {
    category: "Soft Skills",
    icon: "✦",
    skills: [
      "Problem Solving & Analytical Thinking",
      "Effective Communication",
      "Team Collaboration & Leadership",
      "Adaptability & Continuous Learning",
      "Time Management",
    ],
  },
];
 
// Flat array — legacy export (backward compat)
export const skills = skillGroups.flatMap((g) => g.skills);
 
 
// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 7,
    title: "ChronoSense-1 — Self-Calibrating NTC Temperature Sensor",
    category: "Analog IC Design",
    featured: true,
    status: "In Progress",
    timeline: "Aug – Sep 2026",   // NOTE: new field, nothing renders it yet
    description:
      "A full-custom analog front end in IHP SG13CMOS5L 130nm that reads a 10 kΩ NTC thermistor without needing a precision voltage reference. Two matched relaxation oscillators run side by side, one on the sensor, one on a fixed reference resistor, so supply voltage, die temperature and common-mode drift all cancel in the ratio of their counts. Target is 0.1 °C across 0–70 °C inside a 0.04 mm² slot. The first version didn't get there: a PMOS-diode input stage let the sensor pad droop from 0.49 V to 0.24 V across the range, bending the resistance-to-period curve badly enough that two-point calibration still left 24,700 ppm of residual, about 2.5 °C, well over budget. Replacing it with a fixed-voltage V-to-I converter brought that down to 934 ppm, or 0.043 °C. Built August to September 2026, against a HeiChips shuttle tapeout deadline September 2026.",
    highlights: [
      "26× accuracy improvement after re-architecting the input stage (24,700 → 934 ppm)",
      "0.043 °C equivalent residual — 3.7× margin against the 0.1 °C target",
      "Ratiometric dual-oscillator topology cancels supply, temperature and common-mode drift",
      "3 candidate front ends screened across 6 sensor values and 27 PVT corners (162 runs)",
      "Bash harness generates netlists and runs four ngspice sweeps in parallel; Python fits the transfer and reports residual in ppm",
      "Final analog core: 14 transistors and 2 capacitors",
      "Built to a HeiChips 2026 shuttle deadline — schematic, validation and layout inside two months",
    ],
    tags: ["Analog IC Design", "IHP 130nm", "HeiChips", "ngspice", "Xschem", "KLayout", "PVT Analysis", "Python", "Sensor Interface"],
    primaryLink: "#", // TODO: repo or write-up link
    primaryActionText: "Read the Design Notes",
  },
  {
    id: 6,
    title: "Hardware EEPROM Wear-Leveling Controller",
    category: "ASIC Design",
    featured: false,
    status: "Taped Out",
    description:
      "A compact wear-leveling controller that extends the life of external EEPROM and flash under repeated writes. It came out of a real failure: at work I kept seeing EEPROMs die early because field calibration wrote to the same handful of addresses over and over. The controller implements the Start-Gap algorithm with a 2-round Feistel address scrambler, saturating wear counters, automatic bad-block retirement, and in-band telemetry. Verified in cocotb and taped out on SkyWater 130nm through Tiny Tapeout (TTSKY26B).",
    highlights: [
      "Start-Gap wear leveling — table-free, so it stays small",
      "2-round Feistel scrambler with an LFSR-derived key, to stop targeted wear attacks",
      "Saturating 8-bit wear counters per logical block",
      "Automatic bad-block retirement once a block saturates",
      "In-band telemetry for total write count and max-to-min wear skew",
      "Full cocotb regression, then synthesis, place and route, and GDS sign-off",
    ],
    tags: ["Verilog", "ASIC", "Tiny Tapeout", "SkyWater 130nm", "Wear Leveling", "Start-Gap", "Feistel", "cocotb", "VLSI"],
    primaryLink: "https://github.com/OlonadeKelvin/EEPROM_Wear",
    primaryActionText: "View Full Project",
    secondaryLink: "https://olonadekelvin.github.io/EEPROM_Wear/",
    secondaryActionText: "View Design",
  },
  {
    id: 5,
    title: "Autonomous VGA Algorithmic Synthesizer ASIC",
    category: "ASIC Design",
    featured: false,
    status: "Taped Out",
    description:
      "A generative video synthesizer built entirely from digital logic. It renders evolving mathematical fractals straight to a 640×480 VGA display with no software, no RAM and no microcontroller anywhere in the loop — the chip just wakes up and draws. Submitted to Tiny Tapeout on SkyWater 130nm (TTSKY26A) and squeezed into a single 1×1 tile, which is where most of the design effort actually went.",
    highlights: [
      "From-scratch VGA timing generator producing clean 640×480 at 60 Hz (25.175 MHz pixel clock)",
      "Eight-mode fractal render engine built from bitwise XOR and shift operations",
      "16-bit LFSR state machine mutates the visuals roughly once a second",
      "Pixel datapath pipelined to close timing under OpenLane",
      "Fits a single ~160 × 100 µm Tiny Tapeout tile",
      "Self-checking SystemVerilog testbench with coverage on sync, fractal correctness and entropy",
    ],
    tags: ["Verilog", "SystemVerilog", "ASIC", "Tiny Tapeout", "SkyWater 130nm", "VGA", "LFSR", "Demoscene", "cocotb"],
    primaryLink: "https://github.com/OlonadeKelvin/DemosceneTTSKY",
    primaryActionText: "View Full Project",
    secondaryLink: "https://olonadekelvin.github.io/DemosceneTTSKY/",
    secondaryActionText: "View Design",
  },
  {
    id: 8,
    title: "RV32E RISC-V SoC with FIR Accelerator & External QSPI PSRAM",
    category: "ASIC Design",
    featured: false,
    status: "Porting to SKY130",
    description:
      "A minimal RV32E system-on-chip with a custom 16-tap FIR accelerator, UART, GPIO, timer, interrupt controller and an AHB-Lite crossbar, originally built on GF180MCU and now being ported to SkyWater SKY130 for the next Tiny Tapeout shuttle, in a two-tile slot. The interesting part was the memory. On-chip SRAM was eating roughly 48,000 of 74,000 µm² of the floorplan, so I moved memory off-chip entirely: 3 KB of on-chip ROM and SRAM became 8 MB of external QSPI PSRAM, which meant writing a PSRAM controller and a hardware boot loader from scratch. It also turned a cramped Harvard machine into a flat von Neumann one.",
    highlights: [
      "QSPI PSRAM controller with a two-word burst read and one-deep prefetch line — cuts sequential fetch from ~60 to ~31 cycles per word",
      "~150-gate hardware boot loader streams a length-prefixed firmware image into PSRAM, then releases the CPU — no mask ROM, so no respin risk",
      "Flat image means startup code is just a stack-pointer write and a jump: no .data copy, no .bss zero loop",
      "Caught a fatal bus-handshake bug in review: ready was asserted in the request cycle while every slave returns data a cycle later, so the core would have executed stale data from the very first fetch",
      "FIR accuracy verified against a Python golden model within ±1 LSB; at least 4× faster than a software FIR on the same core",
      "Bare-metal firmware in C and RISC-V assembly with custom startup code and linker script",
      "Now porting GF180MCU → SKY130 for the next shuttle: re-running synthesis and macro hardening against SKY130 standard cells, re-closing timing, and re-checking the two-tile area budget — the 16×16 multiplier in the FIR datapath is the thing most likely to blow it",
    ],
    tags: ["Verilog", "RISC-V", "SoC", "AHB-Lite", "QSPI", "PSRAM", "FIR", "OpenLane", "Tiny Tapeout", "GF180MCU", "SkyWater 130nm"],
    primaryLink: "#", // TODO: repo link
    primaryActionText: "View Project",
  },
  {
    id: 9,
    title: "10-Bit SAR ADC — Dynamic-Latch Comparator & Layout",
    category: "Mixed-Signal Design",
    featured: false,
    status: "In Progress",
    description:
      "My block on a team-built 10-bit differential SAR ADC in IHP SG13CMOS5L, intended as reusable mixed-signal IP for sensor interfaces and SoC integration. I own the dynamic-latch comparator end to end — schematic, characterization and layout — and review the neighbouring blocks during integration. The comparator has to resolve inside a 15 MHz per-bit budget so that ten bit trials plus sampling all fit in a 1 MS/s conversion window, with margin left over across corners.",
    highlights: [
      "Comparator characterized for decision polarity, input-referred offset, transition point and regeneration time",
      "Noise behaviour, metastability probability and PVT robustness analysed against the per-bit timing budget",
      "Layout drawn for differential-pair matching, common-centroid placement, guard rings and supply isolation",
      "DRC and LVS closed in the open-source IHP flow",
      "Cross-block review of the sampling network, differential CDAC, SAR control logic and references",
    ],
    tags: ["Mixed-Signal", "SAR ADC", "Comparator", "IHP 130nm", "Analog Layout", "DRC/LVS", "Chipalooza"],
    primaryLink: "#", // TODO: repo or write-up link
    primaryActionText: "View Project",
  },
  {
    id: 10,
    title: "Ring-Oscillator PLL — Charge Pump & Passive Loop Filter",
    category: "Mixed-Signal Design",
    featured: false,
    status: "In Progress",
    description:
      "My two blocks on a team-designed programmable ring-oscillator PLL for GF180MCU, built through the IEEE SSCS PICO Chipathon. The charge pump is built around matched source and sink paths with cascode current-mirror biasing and programmable current control, sized from an output-voltage operating-range analysis. The loop filter comes straight out of the system parameters — charge-pump current, oscillator gain, division ratio, target bandwidth, damping. The team didn't make the 2026 shuttle deadline; both blocks are done at schematic level and we're carrying them to a later tapeout.",
    highlights: [
      "Charge pump targeting under 2% source-to-sink current mismatch across the usable output swing",
      "Charge injection, clock feedthrough, static phase offset and current-source headroom all analysed",
      "Loop filter designed to at least 55° phase margin, with stability, bandwidth and reference-spur suppression evaluated",
      "Sensitivity to component variation checked across the design space",
      "Layout plan uses matching, symmetry, common-centroid placement, guard rings, supply isolation and noise-aware routing",
    ],
    tags: ["Mixed-Signal", "PLL", "Charge Pump", "Loop Filter", "GF180MCU", "ngspice", "Chipathon"],
    primaryLink: "#", // TODO: repo or write-up link
    primaryActionText: "View Project",
  },
  {
    id: 1,
    title: "Synthesizable UART TX/RX IP Core",
    category: "RTL / Digital Design",
    featured: false,
    status: "Complete",
    description:
      "A UART transmitter and receiver written in synthesizable Verilog. Configurable baud-rate generation, start/stop-bit framing and parity, all built on a clean latch-free FSM. Verified in Icarus Verilog with GTKWave waveform inspection on the framing and edge cases.",
    highlights: [
      "Fully synthesizable RTL with no inferred latches",
      "Baud rate and parity configurable through parameters",
      "Readable FSM architecture — easy to drop into another design",
      "Verified with Icarus Verilog and GTKWave",
    ],
    tags: ["Verilog", "RTL Design", "FSM", "GTKWave", "Icarus Verilog", "UART"],
    primaryLink: "https://github.com/OlonadeKelvin/Synthesizable-UART-Transmitter-Receiver-IP-Core-",
    primaryActionText: "View RTL Source",
  },
  {
    id: 3,
    title: "Thermal Analysis of a Multi-Core Processor Die",
    category: "Simulation",
    featured: false,
    status: "Complete",
    description:
      "A transient 2D heat-conduction model of a die with two switching cores, written to look at thermal crosstalk and how temperature actually distributes across the chip. Explicit Euler time integration with Dirichlet boundary conditions on a uniform grid, plus live 2D heatmap and 3D surface output. Everything is parameterized — chip size, grid resolution, material properties, heat flux — so it can be pointed at a different floorplan without rewriting the solver.",
    highlights: [
      "Fully parameterized: chip size, grid resolution, material properties, heat flux",
      "Explicit Euler time integration with Dirichlet boundary conditions",
      "Real-time 2D heatmap and 3D surface visualization",
      "Models thermal crosstalk between two switching cores",
      "Applicable to thermal-aware VLSI physical design",
    ],
    tags: ["Thermal Simulation", "2D Heat Conduction", "Explicit Euler", "MATLAB", "Python", "VLSI Physical Design"],
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
      "An environmental monitor with no microcontroller and no firmware in it at all. Sensing, threshold comparison and alert logic live entirely in configurable logic blocks and core-independent peripherals, so the response is deterministic and there's no software layer left to hang, corrupt or need reflashing in the field.",
    highlights: [
      "No firmware — sensing and alerting done in hardware",
      "Deterministic, real-time response to threshold crossings",
      "Removes the software failure modes entirely",
      "Built on configurable logic blocks and core-independent peripherals",
    ],
    tags: ["Digital Logic", "Hardware Design", "PIC16F", "Sensors", "Combinational Logic"],
    primaryLink: "https://youtube.com/shorts/SLURRuQGh4o?si=Jw9fgmtipO57srMM",
    primaryActionText: "View Demo",
  },
  {
    id: 2,
    title: "RTD-Based Cardiac Arrhythmia Detector",
    category: "Device Physics",
    featured: false,
    status: "Exploratory",
    description:
      "An open question I've been chasing: can the negative differential resistance of an InGaAs/AlAs resonant tunneling diode be used as the switching element in a cardiac anomaly detector? RTDs switch on quantum tunneling rather than carrier transit, which is what makes the speed interesting. Still early — this is device-physics reading and simulation, not a built system.",
    highlights: [
      "InGaAs/AlAs heterostructure material system",
      "NDR-based bistable switching as the detection mechanism",
      "Exploring what detection latency the device physics actually allows",
      "Early-stage: simulation and literature work only",
    ],
    tags: ["Device Physics", "RTD", "InGaAs/AlAs", "Simulation", "Quantum Devices"],
    primaryLink: "#",
    primaryActionText: "Read Abstract",
  },
];

