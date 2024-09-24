import React from 'react';
import './QuoteCards.css'; // You'll style the component in a separate CSS file

// Mock data for the cards
const quoteData = [
  {
    id: 1,
    name: 'Paige Brennan',
    title: 'Webflow Founder',
    quote: 'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.',
    image: 'https://www.figma.com/file/bJBC2DPx2a4Y5qyDSwp9A0/image/e2600913a2f98cb3b96682f2a6eb75b050b2b0ee', // Replace with actual image paths
    isActive: false,
  },
  {
    id: 2,
    name: 'Caitlin Ward',
    title: 'Webflow Founder',
    quote: 'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with.',
    image: 'https://www.figma.com/file/bJBC2DPx2a4Y5qyDSwp9A0/image/e2600913a2f98cb3b96682f2a6eb75b050b2b0ee', // Replace with actual image paths
    isActive: true,
  },
  {
    id: 3,
    name: 'Matthew Webster',
    title: 'Webflow Founder',
    quote: 'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.',
    image: 'https://www.figma.com/file/bJBC2DPx2a4Y5qyDSwp9A0/image/e2600913a2f98cb3b96682f2a6eb75b050b2b0ee', // Replace with actual image paths
    isActive: false,
  }
];

const QuoteCards = () => {
  return (
    <div className="quote-container">
      {quoteData.map(({ id, name, title, quote, image, isActive }) => (
        <div key={id} className={`quote-card ${isActive ? 'active' : ''}`}>
          <div className="quote-image">
            <img src={image} alt={name} />
          </div>
          <div className="quote-text">"{quote}"</div>
          <div className="quote-author">
            <h4>{name}</h4>
            <p>{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuoteCards;
