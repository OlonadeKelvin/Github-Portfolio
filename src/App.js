// src/App.js
import React, { useState, useEffect } from "react";
import { personalInfo, skillGroups, projects } from "./data";
import "./styles.css";
import profilePic from './assets/PROFILE.png';

/* ═══════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════ */
function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about",    label: "About"    },
    { href: "#skills",   label: "Skills"   },
    { href: "#projects", label: "Projects" },
    { href: "#contact",  label: "Contact"  },
  ];

  return (
    <>
      <nav
        className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" aria-label="Back to top — Kelvin Olonade">
            <span className="navbar__logo-text">K. Olonade</span>
            <span className="navbar__logo-dot" aria-hidden="true">.</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="navbar__link">{label}</a>
              </li>
            ))}
          </ul>

          {/* Persistent resume CTA */}
          <a
            href={process.env.PUBLIC_URL + '/Resume_OlonadeKelvin.pdf'}
            download="Olonade_Kelvin_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent btn-sm navbar__resume"
            aria-label="Download Resume PDF"
          >
            Download CV
          </a>

          {/* Hamburger — mobile only */}
          <button
            className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay - NOW SAFELY OUTSIDE THE NAV TAG */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <ul className="mobile-menu__list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="mobile-menu__link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={process.env.PUBLIC_URL + '/Resume_OlonadeKelvin.pdf'}
          download="Olonade_Kelvin_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent btn-lg mobile-menu__cta"
          onClick={() => setMenuOpen(false)}
        >
          Download Resume
        </a>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   HERO
═══════════════════════════════════════════ */
function Hero() {
  return (
    <header id="hero" className="hero" role="banner">
      {/* Decorative circuit-grid texture */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__body" data-aos="fade-up" data-aos-duration="700">
        {/* Availability badge */}
        <div className="hero__badge" role="note">
          <span className="hero__badge-dot" aria-hidden="true" />
          Available for internships &amp; research collaborations
        </div>

        <h1 className="hero__name">{personalInfo.name}</h1>

        <p className="hero__role">{personalInfo.role}</p>

        <p className="hero__usp">{personalInfo.usp}</p>

        {/* Key metrics */}
        <div
          className="hero__stats"
          data-aos="fade-up"
          data-aos-delay="150"
          aria-label="Key highlights"
        >
          {personalInfo.stats.map(({ value, label }) => (
            <div className="hero__stat" key={label}>
              <span className="hero__stat-value">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>

        {/* Primary CTAs */}
        <div className="hero__ctas" data-aos="fade-up" data-aos-delay="260">
          <a href="#projects" className="btn btn-primary btn-lg">
            View Projects
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a
            href={process.env.PUBLIC_URL + '/Resume_OlonadeKelvin.pdf'} download="Olonade_Kelvin_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-lg"
            aria-label="Download Resume (opens PDF in new tab)"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════ */
function About() {
  const paragraphs = personalInfo.about.split("\n\n");

  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container">
        <header className="section-head" data-aos="fade-up">
          <span className="section-label">Background</span>
          <h2 id="about-heading" className="section-title">About Me</h2>
        </header>

        <div className="about-layout">
          {/* Narrative */}
          <div className="about-copy" data-aos="fade-up" data-aos-delay="80">
            {paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? "about-lead" : ""}>
                {para}
              </p>
            ))}
          </div>

          {/* Quick-fact sidebar */}
          <aside
            className="about-sidebar"
            aria-label="Quick facts"
            data-aos="fade-up"
            data-aos-delay="180"
          >
          	<img src={profilePic} alt="Kelvin Olonade" className="about-profile-pic" />
            <div className="about-card">
              <p className="about-card__label">Currently</p>
              <ul className="about-card__list">
                <li>
                  <span aria-hidden="true">◈</span>
                  Learning full ASIC flow (RTL → STA)
                </li>
                <li>
                  <span aria-hidden="true">◈</span>
                  Founding IEEE SSCS Chapter @ UniLag
                </li>
                <li>
                  <span aria-hidden="true">◈</span>
                  Advancing RTD quantum device research
                </li>
              </ul>
            </div>

            <div className="about-card">
              <p className="about-card__label">Education</p>
              <p className="about-card__degree">
                BSc. Electrical &amp; Electronics Engineering
              </p>
              <p className="about-card__school">University of Lagos</p>
              <p className="about-card__year">Expected 2028</p>
            </div>

            <div className="about-card about-card--accent">
              <p className="about-card__label">Open To</p>
              <p className="about-card__open">
                Internships · Research Collaborations · VLSI Projects · Open Source
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════ */
function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-heading">
      <div className="container">
        <header className="section-head" data-aos="fade-up">
          <span className="section-label">Expertise</span>
          <h2 id="skills-heading" className="section-title">Skills &amp; Tools</h2>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={i * 65}
            >
              <div className="skill-card__head">
                <span className="skill-card__icon" aria-hidden="true">
                  {group.icon}
                </span>
                <h3 className="skill-card__title">{group.category}</h3>
              </div>
              <ul
                className="skill-card__list"
                role="list"
                aria-label={`${group.category} skills`}
              >
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-item__pip" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROJECT CARD
═══════════════════════════════════════════ */
function ProjectCard({ project }) {
  const { featured } = project;
  const isExternal = project.primaryLink !== "#";

  return (
    <article
      className={`proj-card${featured ? " proj-card--featured" : ""}`}
      aria-label={`Project: ${project.title}`}
    >
      {featured && (
        <span className="proj-card__badge" aria-label="Flagship project">
          ★ Flagship Project
        </span>
      )}

      {/* Category + Status row */}
      <div className="proj-card__meta">
        <span className="proj-card__cat">{project.category}</span>
        <span
          className={`proj-card__status proj-card__status--${
            project.status === "Complete" ? "done" : "wip"
          }`}
        >
          {project.status}
        </span>
      </div>

      <h3 className="proj-card__title">{project.title}</h3>
      <p className="proj-card__desc">{project.description}</p>

      {/* Highlights — featured card only */}
      {featured && project.highlights?.length > 0 && (
        <ul className="proj-card__highlights" aria-label="Key highlights">
          {project.highlights.map((h) => (
            <li key={h}>
              <span aria-hidden="true">✓</span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {/* Tech tags */}
      <div className="proj-card__tags" aria-label="Technologies used">
        {project.tags.map((tag) => (
          <span key={tag} className="proj-tag">
            {tag}
          </span>
        ))}
      </div>

{/* CTA */}
      <div className="proj-card__footer">
        {project.primaryLink && (
          <a
            href={project.primaryLink}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className={`btn btn-sm ${featured ? "btn-primary" : "btn-outline"} proj-card__cta`}
            aria-label={`${project.primaryActionText} — ${project.title}`}
          >
            {project.primaryActionText}
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        )}

        {/* Render secondary link if it exists in data.js */}
        {project.secondaryLink && (
          <a
            href={project.secondaryLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-outline proj-card__cta"
            aria-label={`${project.secondaryActionText} — ${project.title}`}
          >
            {project.secondaryActionText}
          </a>
        )}
      </div>
    </article>
  );
}


/* ═══════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════ */
function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest     = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">
        <header className="section-head" data-aos="fade-up">
          <span className="section-label">Work</span>
          <h2 id="projects-heading" className="section-title">Featured Projects</h2>
          <p className="section-sub">
            RTL designs, embedded systems, and research — built from first principles.
          </p>
        </header>

        {/* Full-width flagship */}
        {featured.map((p) => (
          <div key={p.id} className="projects-featured" data-aos="fade-up">
            <ProjectCard project={p} />
          </div>
        ))}

        {/* Supporting projects grid */}
        <div className="projects-grid">
          {rest.map((p, i) => (
            <div key={p.id} data-aos="fade-up" data-aos-delay={i * 100}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════ */
function Contact() {
  const { contacts } = personalInfo;

  const contactItems = [
    {
      icon: "✉",
      label: "Email",
      value: contacts.email,
      href: `mailto:${contacts.email}`,
      external: false,
    },
    {
      icon: "in",
      label: "LinkedIn",
      value: "olonade-kelvin",
      href: contacts.linkedin,
      external: true,
    },
    {
      icon: "⌥",
      label: "GitHub",
      value: "olonadekelvin",
      href: contacts.github,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="section section--dark"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <header className="section-head" data-aos="fade-up">
          <span className="section-label section-label--ondark">Get In Touch</span>
          <h2 id="contact-heading" className="section-title section-title--ondark">
            Let's Build Something
          </h2>
          <p className="section-sub section-sub--ondark">
            Whether you're a recruiter, researcher, or fellow engineer — I'd love to connect.
          </p>
        </header>

        <div className="contact-grid" data-aos="fade-up" data-aos-delay="100">
          {contactItems.map(({ icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              className="contact-card"
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={`${label}: ${value}`}
            >
              <span className="contact-card__icon" aria-hidden="true">{icon}</span>
              <span className="contact-card__label">{label}</span>
              <span className="contact-card__value">{value}</span>
            </a>
          ))}
        </div>

        <div className="contact-resume" data-aos="fade-up" data-aos-delay="200">
          <a
            href={process.env.PUBLIC_URL + '/Resume_OlonadeKelvin.pdf'} download="Olonade_Kelvin_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg"
            aria-label="Download full resume as PDF (opens in new tab)"
          >
            Download Full Resume (PDF)
            <span className="btn-arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container site-footer__inner">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {personalInfo.name} · Engineered with Precision
        </p>
        <nav className="site-footer__nav" aria-label="Social links">
          <a
            href={personalInfo.contacts.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={personalInfo.contacts.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.contacts.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   SCROLL TO TOP
═══════════════════════════════════════════ */
function ScrollTop({ visible, onClick }) {
  return (
    <button
      className={`scroll-top${visible ? " scroll-top--show" : ""}`}
      onClick={onClick}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

/* ═══════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop,  setShowTop]  = useState(false);

  // Show scroll-to-top after 500px
  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="site">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop visible={showTop} onClick={scrollToTop} />
    </div>
  );
}
