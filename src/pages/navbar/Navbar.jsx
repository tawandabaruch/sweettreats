import React, { useState } from 'react';
import './navstyles.css'; // import your own stylesheet

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="menu-bar">
      <div className="menu-bar-logo">
        <a href="/">Sweet Treats</a>
      </div>
      <div className="menu-bar-toggle" onClick={handleMenuClick}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </div>
      </div>
      <ul className={`menu-bar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
