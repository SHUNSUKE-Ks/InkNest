import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>InkNest</h1>
        <p>Your creative space for collaborative storytelling.</p>
      </header>
      <main className="home-main">
        <Link to="/chat" className="home-button">
          Start Weaving Stories
        </Link>
      </main>
      <footer className="home-footer">
        <p>&copy; 2025 InkNest</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
