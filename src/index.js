import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { LangProvider } from './context/LangContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider>
      <AuthProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </AuthProvider>
    </ThemeProvider>
  </Router>
);


