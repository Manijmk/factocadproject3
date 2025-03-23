// import React from 'react';

// const About = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           We are a leading construction company dedicated to delivering high-quality projects with a focus on innovation and sustainability.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <img src="https://via.placeholder.com/600x400" alt="About Us" className="rounded-lg" />
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
//             <p className="text-gray-600 mb-4">
//               Our mission is to provide exceptional construction services that exceed our clients' expectations.
//             </p>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
//             <p className="text-gray-600">
//               Our vision is to be the most trusted construction company in the industry.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import React from "react";
import AboutImage from "../assests/images/DigitalManufacturingPicture.png";

const About = () => {
  return (
    <section className="py-16 mt-10 bg-gray-100">
    <div className="container mx-auto px-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
          WHO ARE WE
        </h3>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Section - Increased Size */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={AboutImage}
            alt="About Factocad"
            className="rounded-lg shadow-lg w-full md:max-w-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Transforming Manufacturing with Smart Automation
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Factocad Robotics delivers cutting-edge digital manufacturing solutions for the Automotive, Aerospace, and Locomotive industries.  
            With expertise in turnkey industrial automation and robotics technology, we help businesses achieve efficiency, precision, and scalability.
          </p>
          <ul className="mt-6 space-y-3 text-lg text-gray-700">
            <li>✅ BIW & Locomotive Automation</li>
            <li>✅ Robotic Welding & Smart Manufacturing</li>
            <li>✅ Process Planning & Simulation</li>
          </ul>
          
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
