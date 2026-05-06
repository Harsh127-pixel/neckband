import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * This is the entry point of our React application.
 * It finds the 'root' element in our HTML and renders the App component inside it.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
