// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Embedded from './components/Embedded';
import Simulations from './components/Simulations';

function App() {
  const [showProfile, setShowProfile] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleProfile = (e) => {
    e.stopPropagation();
    setShowProfile(!showProfile);
  };

  React.useEffect(() => {
    const close = () => {
      setShowProfile(false);
      setMenuOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <Router basename="/Github-Portfolio">
      <header>
        <div className="nav-container">
          <h1 className="logo">Kelvin Olonade</h1>

          <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/embedded" onClick={() => setMenuOpen(false)}>Embedded</Link>
            <Link to="/simulations" onClick={() => setMenuOpen(false)}>Simulations</Link>
          </nav>

          <div className="profile-trigger" onClick={toggleProfile}>
            <img src="/PROFILE.jpg" alt="Profile" className="profile-icon" />
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </header>

      {showProfile && (
        <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
          <img src="/PROFILE.jpg" alt="Kelvin" className="modal-photo" />
          <h2>Olonade Kelvin Mobolaji</h2>
          <p>
            3rd-year Electrical & Electronics Engineering student at University of Lagos<br />
            Specializing in embedded systems, power electronics, and simulations.<br />
          </p>
                    <div className="contact">
            <a href="https://linkedin.com/in/olonade-kelvin" target="_blank">LinkedIn</a>
            <a href="https://github.com/olonadekelvin" target="_blank">GitHub</a>
            <a href="https://instagram.com/olonade_kelvin" target="_blank">Instagram</a>
          </div>
          <p><strong>WhatsApp:</strong> +234 704 187 7890</p>
          <p><strong>Email:</strong> olonadekelvin@email.com</p>
          <p><strong>UNILAG:</strong> 230403021@live.unilag.edu.ng</p>
          <button onClick={() => setShowProfile(false)} className="close-btn">×</button>
        </div>
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/embedded" element={<Embedded />} />
          <Route path="/simulations" element={<Simulations />} />
        </Routes>
      </main>

      <footer>
        <p>© 2025 Olonade Kelvin. Built with React.</p>
      </footer>
    </Router>
  );
}

export default App;