// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Global styles
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();