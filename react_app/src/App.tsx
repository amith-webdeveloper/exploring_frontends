import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import  styles from './styles/App.module.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === 'amith' && password === '18406678') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={
            isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" replace />
          } />
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login onLogin={handleLogin} />
          } />
          <Route path="/product/:id" element={
            isAuthenticated ? <ProductDetail /> : <Navigate to="/login" replace />
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;