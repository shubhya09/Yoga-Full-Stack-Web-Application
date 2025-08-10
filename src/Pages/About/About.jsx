import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Top Image with Quote */}
      <div className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1"
          alt="Yoga"
          className="about-hero-image"
        />
        <div className="about-quote">
          <h1>"Yoga is the journey of the self, through the self, to the self."</h1>
          <p>- Bhagavad Gita</p>
        </div>
      </div>

      {/* About Content */}
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Yoga Bliss</strong>, your sanctuary for peace, balance, and
          transformation. Our mission is to guide you through the ancient art of yoga
          to achieve harmony between mind, body, and soul.
        </p>
        <p>
          Whether you're a beginner or an experienced practitioner, our classes are
          designed to nurture your well-being through mindful movement, breathing
          techniques, and meditation. Join us on a path of self-discovery and inner peace.
        </p>
      </div>
    </div>
  );
};

export default About;
