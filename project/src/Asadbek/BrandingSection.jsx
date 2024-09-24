import React from 'react';
import './BrandingSection.css'; // Add CSS styling here

const BrandingSection = () => {
  return (
    <div className="branding-container">
      <div className="text-section">
        <h1>
          IMPROVE YOUR <br />
          <span className="highlight">BRAND WITH AN</span> <br />
          AWESOME SITE.
        </h1>
        <div className="text-details">
          <div className="detail">
            <h3>COMPREHENSIVE <span className="small-highlight">BRAND</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
          <div className="detail">
            <h3>WEB <span className="small-highlight">PRESENCE</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src="https://www.figma.com/file/bJBC2DPx2a4Y5qyDSwp9A0/image/b918d388f14292aa004b69a5b80bad1786088240" alt="Branding Site Example" />
      </div>
    </div>
  );
};

export default BrandingSection;
