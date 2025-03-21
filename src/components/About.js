import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We are a leading construction company dedicated to delivering high-quality projects with a focus on innovation and sustainability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://via.placeholder.com/600x400" alt="About Us" className="rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              Our mission is to provide exceptional construction services that exceed our clients' expectations.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Our vision is to be the most trusted construction company in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;