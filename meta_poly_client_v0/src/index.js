import React from 'react';
import ReactDOM from 'react-dom';

// ----------------- Styles App -----------------
import './index.css';
// Styles of Template
import './assets/css/app-dark.css';
import './assets/css/app.css';
import './assets/css/icons.css';
// Styles of Custom
import './assets/css/custom/custom.css';

// Main Components
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
