// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Embedded from './components/Embedded';
import Simulations from './components/Simulations';

function App() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  React.useEffect(() => {
    const closeAll = () => {
      setDropdownOpen(false);
      setMenuOpen(false);
    };
    document.addEventListener('click', closeAll);
    return () => document.removeEventListener('click', closeAll);
  }, []);

  return (
    <Router basename="/Github-Portfolio">
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

          <div className="profile-dropdown" onClick={toggleDropdown}>
            <img src="/PROFILE.jpg" alt="Profile" className="profile-icon" />
            {dropdownOpen && (
              <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
                <h3>About Me</h3>
                <p>
                  Olonade Kelvin Mobolaji — 3rd-year EEE student at UNILAG (CGPA 4.2/5.0).<br/>
                  Passionate about embedded systems, power electronics, and simulations.<br/>
                  Deputy Lead at IEEE & SEES-UNILAG. Mentor in IoT & EV projects.<br/>
                  Seeking internships at Nvidia, Tesla, or research in sustainable energy.
                </p>
                <h3>Contact</h3>
                <a href="https://linkedin.com/in/olonade-kelvin" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/olonadekelvin" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://instagram.com/olonade_kelvin" target="_blank" rel="noreferrer">Instagram</a>
                <p>WhatsApp: +234 704 187 7890</p>
                <p>Email: olonadekelvin@email.com</p>
                <p>UNILAG: 230403021@live.unilag.edu.ng</p>
              </div>
            )}
          </div>

          <button id="menu-toggle" onClick={toggleMenu}>Menu</button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/embedded" element={<Embedded />} />
          <Route path="/simulations" element={<Simulations />} />
        </Routes>
      </main>

      <footer>
        <p>© 2025 Olonade Kelvin. Built with React + GitHub Pages.</p>
      </footer>
    </Router>
  );
}

export default App;