// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

// Initialize AOS — tuned for snappy, premium feel
AOS.init({
  duration: 650,          // Crisp, not sluggish
  easing:   'ease-out-cubic',
  once:     true,         // Fire once — better performance
  offset:   80,           // Trigger 80px before element enters view
  mirror:   false,
  anchorPlacement: 'top-bottom',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
