import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="agency-info">
        <p>A creative agency based in Helsinki.</p>
        <a href="mailto:hello@robi.com">hello@robi.com</a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#cart">Cart (0)</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
