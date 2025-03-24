import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroBgImage from '../assests/images/bg-4.png';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  // Parallax Effect on Scroll
  const handleScroll = () => {
    setOffsetY(window.scrollY * 0.5); // Adjust speed for smooth effect
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform"
        style={{
          backgroundImage: `url(${HeroBgImage})`,
          transform: `translateY(${offsetY}px)`,
        }}
      ></div>

      {/* Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight">Innovating Manufacturing Solutions</h1>
        <p className="mt-4 text-lg">Innovative Digital Manufacturing, Expert Staffing, and Lean Processes</p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
