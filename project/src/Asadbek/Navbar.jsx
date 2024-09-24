import React from 'react';
import './Navbar.css'; 

const NavbarComponet = () => {
  return (
    <section className="design-section">
      <div className="image-container">
        <img src="https://www.figma.com/file/bJBC2DPx2a4Y5qyDSwp9A0/image/a11eec7feb52f9da5827f9024c535ae86efb60da" alt="Person working" />
      </div>
      <div className="text-container">
        <h1>We believe that</h1>
        <h2>The power of design helps businesses.</h2>
        <button className="cta-button">Work with us</button>
      </div>
    </section>
  );
};

export default NavbarComponet;
