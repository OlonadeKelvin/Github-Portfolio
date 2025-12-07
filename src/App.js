// src/App.js
import React from 'react';
// CHANGED: Switched to HashRouter to fix GitHub Pages 404 refresh errors
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Embedded from './components/Embedded';
import Simulations from './components/Simulations';
import PROFILE from './assets/PROFILE.jpg';

function App() {
  const [showProfile, setShowProfile] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleProfile = (e) => {
    e.stopPropagation();
    setShowProfile(!showProfile);
  };

  React.useEffect(() => {
    const close = () => setShowProfile(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    // CHANGED: Removed basename (HashRouter handles it automatically)
    <Router>
      <header>
        <div className="nav-container">
          <h1 className="logo">Kelvin Olonade</h1>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/embedded" onClick={() => setMenuOpen(false)}>Embedded</Link>
            <Link to="/simulations" onClick={() => setMenuOpen(false)}>Simulations</Link>
          </nav>

          {/* PROFILE ICON */}
          <div className="profile-trigger" onClick={toggleProfile}>
            <img src={PROFILE} alt="Profile" className="profile-icon" />
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {/* PROFILE MODAL */}
      {showProfile && (
        <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
          <img src={PROFILE} alt="Kelvin" className="modal-photo" />
          <h2>Olonade Kelvin Mobolaji</h2>
          <p className="profile-bio">
            3rd-year Electrical & Electronics Engineering student at University of Lagos.<br />
            Specializing in embedded systems, power electronics, and simulations.
          </p>
         
          <div className="contact">
            <a href="https://linkedin.com/in/olonade-kelvin" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/olonadekelvin" target="_blank" rel="noreferrer">GitHub</a>
            {/* Fixed typo: removed '>' before Instagram */}
            <a href="https://instagram.com/olonade_kelvin_" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          
          <div className="contact-info">
            <p><strong>WhatsApp:</strong> +234 704 187 7890</p>
            <p><strong>Gmail:</strong> olonadekelvin@email.com</p>
            <p><strong>Outlook:</strong> 230403021@live.unilag.edu.ng</p>
          </div>
          
          <button onClick={() => setShowProfile(false)} className="close-btn">×</button>
        </div>
      )}

      {/* ADDED: Minimal modal backdrop for better UI */}
      {showProfile && <div className="modal-backdrop"></div>}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/embedded" element={<Embedded />} />
          <Route path="/simulations" element={<Simulations />} />
        </Routes>
      </main>

      <footer>
        <div className="footer-content">
          <p>© 2025 Olonade Kelvin</p>
          <p className="footer-tagline">Engineered with Precision</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;