import React from 'react';

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Construction</h3>
            <p className="text-gray-600">
              We provide end-to-end construction services for residential and commercial projects.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Renovation</h3>
            <p className="text-gray-600">
              We specialize in renovating and remodeling existing structures to meet modern standards.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Maintenance</h3>
            <p className="text-gray-600">
              We offer comprehensive maintenance services to keep your property in top condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;