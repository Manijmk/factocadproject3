import React from 'react';
import HeroBgImage from '../assests/images/bg-4.png'; // Adjust the path as needed

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: `url(${HeroBgImage})` }}
      className="bg-cover bg-center h-screen flex items-center relative"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display' }}>
          Building Your Dream Home
        </h1>
        <p className="text-xl text-white mb-8" style={{ fontFamily: 'Roboto' }}>
          We provide the best construction services for your dream projects.
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300" style={{ fontFamily: 'Roboto' }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;