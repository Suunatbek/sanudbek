import React from 'react';
import './Food.css'; // Add custom styles in a CSS file

const FoodConteyner = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>THE PERFECT <br /> AGENCY FOR YOUR BRAND</h1>
        <p>We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.</p>
        <p>We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born.</p>
      </header>
      
      <div className="awards-section">
        <div className="awards">
          <h3>AWWWARDS</h3>
          <ul>
            <li>Site of the Day: 6</li>
            <li>Developer Award: 2</li>
            <li>Honorable Mention: 3</li>
            <li>Mobile Excellence: 3</li>
          </ul>
        </div>

        <div className="css-awards">
          <h3>CSS DESIGN AWARDS</h3>
          <ul>
            <li>UX Design Award: 10</li>
            <li>UI Design Award: 4</li>
            <li>Innovation Design Award: 6</li>
            <li>Website of the Day: 13</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FoodConteyner;
