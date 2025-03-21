import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-secondary" style={{ fontFamily: 'Playfair Display' }}>
          Construction Co.
        </div>
        <nav>
          <ul className="flex space-x-6" style={{ fontFamily: 'Roboto' }}>
            <li><a href="#home" className="text-secondary hover:text-primary">Home</a></li>
            <li><a href="#about" className="text-secondary hover:text-primary">About</a></li>
            <li><a href="#services" className="text-secondary hover:text-primary">Services</a></li>
            <li><a href="#projects" className="text-secondary hover:text-primary">Projects</a></li>
            <li><a href="#blog" className="text-secondary hover:text-primary">Blog</a></li>
            <li><a href="#contact" className="text-secondary hover:text-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;