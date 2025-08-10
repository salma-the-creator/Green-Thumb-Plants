import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const backgroundStyle = {
    backgroundImage: 'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1350&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 2rem',
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Green Thumb Plants</h1> {/* Company Name */}

      <p style={{ maxWidth: 600, fontSize: '1.25rem', marginBottom: '2rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '1rem', borderRadius: '8px' }}>
        At Green Thumb Plants, we believe in bringing nature closer to your home with beautiful, easy-to-care-for houseplants.
        Our curated selection helps you create a peaceful and vibrant living space.
      </p> {/* Paragraph about company */}

      <Link to="/products">
        <button style={{ fontSize: '1.5rem', padding: '1rem 3rem', borderRadius: '8px', cursor: 'pointer' }}>
          Get Started
        </button>
      </Link> {/* Get Started button */}
    </div>
  );
}
