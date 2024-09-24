import React from 'react';
import './PartnersSection.css'; // Optional: For styling

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <h2>
        We partner with <span>forward-thinking</span> startups.
      </h2>
      <div className="partners-logos">
        <img src="path_to_logo1.png" alt="Iceberg logo" />
        <img src="path_to_logo2.png" alt="Vision logo" />
        <img src="path_to_logo3.png" alt="Homey logo" />
        <img src="path_to_logo4.png" alt="Rise logo" />
        <img src="path_to_logo5.png" alt="PinPoint logo" />
      </div>
    </section>
  );
};

export default PartnersSection;
