// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Embedded from './components/Embedded';
import Simulations from './components/Simulations';
import PROFILE from './assets/PROFILE.jpg'; // Assume assets folder for images

function App() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown')) setDropdownOpen(false);
      if (!event.target.closest('#menu-toggle') && !event.target.closest('#nav-menu')) setMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Router>
      <header>
        <div className="nav-container">
          <h1 className="logo">Kelvin Olonade</h1>
          <nav id="nav-menu" className={menuOpen ? 'show' : ''}>
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/embedded" onClick={() => setMenuOpen(false)}>Embedded</Link></li>
              <li><Link to="/simulations" onClick={() => setMenuOpen(false)}>Simulations</Link></li>
            </ul>
          </nav>
          <div className="profile-dropdown">
            <img src={PROFILE} alt="Profile" className="profile-icon" onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <h3>About Me</h3>
                <p>Olonade Kelvin Mobolaji is a third-year Electrical and Electronics Engineering student at the University of Lagos, Nigeria, with a CGPA of 4.2/5.0. Passionate about electronics, hardware design, and simulations, I specialize in solving complex problems in embedded systems and power engineering. As Deputy Lead in IEEE and SEES-UNILAG, I mentor students on IoT and EV projects. My goal is to contribute to sustainable technologies through internships at companies like Nvidia or Tesla and research publications in power systems.</p>
                <h3>Contact Me</h3>
                <a href="www.linkedin.com/in/olonade-kelvin">LinkedIn</a>
                <a href="https://x.com/KFactorUnknown">Twitter/X</a>
                <a href="https://instagram.com/olonade_kelvin_">Instagram</a>
                <p>WhatsApp: +234 704187780</p>
                <p>Email: olonadekelvin@email.com</p>
                <p>Institutional: 230403021@live.unilag.edu.ng</p>
              </div>
            )}
          </div>
          <button id="menu-toggle" onClick={toggleMenu}>☰</button>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/embedded" element={<Embedded />} />
        <Route path="/simulations" element={<Simulations />} />
      </Routes>
      
      <footer>
        <p>&copy; 2025 Olonade Kelvin. Built with React on GitHub Pages.</p>
      </footer>
    </Router>
  );
}

export default App;