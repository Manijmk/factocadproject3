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
  //   <section className="py-16 mt-10 bg-gray-100">
  //   <div className="container mx-auto px-6">
  //     {/* Section Heading */}
  //     <div className="text-center mb-12">
  //       <h3 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
  //         WHO ARE WE
  //       </h3>
  //       <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
  //     </div>

  //     <div className="flex flex-col md:flex-row items-center gap-12">
  //       {/* Image Section - Increased Size */}
  //       <div className="w-full md:w-1/2 flex justify-center">
  //         <img
  //           src={AboutImage}
  //           alt="About Factocad"
  //           className="rounded-lg shadow-lg w-full md:max-w-2xl"
  //         />
  //       </div>

  //       {/* Text Section */}
  //       <div className="w-full md:w-1/2">
  //         <h2 className="text-5xl font-bold text-gray-800 leading-tight">
  //           Transforming Manufacturing with Smart Automation
  //         </h2>
  //         <p className="mt-6 text-lg text-gray-700 leading-relaxed">
  //           Factocad Robotics delivers cutting-edge digital manufacturing solutions for the Automotive, Aerospace, and Locomotive industries.  
  //           With expertise in turnkey industrial automation and robotics technology, we help businesses achieve efficiency, precision, and scalability.
  //         </p>
  //         <ul className="mt-6 space-y-3 text-lg text-gray-700">
  //           <li>✅ BIW & Locomotive Automation</li>
  //           <li>✅ Robotic Welding & Smart Manufacturing</li>
  //           <li>✅ Process Planning & Simulation</li>
  //         </ul>

  //       </div>
  //     </div>
  //   </div>
  // </section>

  <section className="py-20 my-10 bg-gray-100">
  <div className="container mx-auto px-6 md:px-12 lg:px-20">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h3 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
        Who We Are
      </h3>
      <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
    </div>

    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={AboutImage}
          alt="About Factocad"
          className="rounded-lg shadow-lg w-full md:max-w-xl transform transition duration-300 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-bold text-gray-800 leading-tight">
          Transforming Manufacturing with Smart Automation
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          FACTOCAD Robotics provides cutting-edge Digital Manufacturing Solutions for  
          Automotive, Aerospace, Rail Transportation, Heavy Machinery, and Construction Equipment.  
          Our expertise in Turnkey Automation ensures High Efficiency, Precision, and Scalability.
        </p>

        {/* Key Offerings - Modern Bullet Points */}
        <ul className="mt-6 space-y-4 text-lg text-gray-700">
          <li className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>BIW & Locomotive Automation</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>Robotic Welding & Smart Manufacturing</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>Process Planning & Simulation</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>Automated Conveyor & Assembly Systems</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span>Industry 4.0 Integration</span>
          </li>
        </ul>

        {/* Call-to-Action Buttons */}
        <div className="mt-10 flex space-x-4">
          <a
            href="/services"
            className="px-6 py-3 text-lg font-semibold text-white bg-yellow-500 rounded-md shadow-lg transition transform hover:scale-105"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-lg font-semibold text-gray-900 border border-gray-800 rounded-md shadow-lg transition hover:bg-gray-800 hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;



// import React from "react";
// import AboutImage from "../assests/images/DigitalManufacturingPicture.png"

// const About = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left: Image */}
//           <div>
//             <img
//               src={AboutImage} // Replace with an actual image path
//               alt="Digital Manufacturing & Automation"
//               className="rounded-lg shadow-xl"
//             />
//           </div>

//           {/* Right: Content */}
//           <div>
//             <h2 className="text-5xl font-extrabold text-gray-900">
//               About <span className="text-yellow-500">FACTOCAD</span>
//             </h2>
//             <p className="mt-6 text-lg text-gray-700 leading-relaxed">
//               FACTOCAD is a trusted <b>Digital Manufacturing Engineering</b>
//                 and <b>Industrial Robotics Automation</b> provider. We specialize
//                 in <b>automating manufacturing</b> processes for industries like
//                 <b>Automotive, Aerospace, Rail Transportation, Heavy Machinery,
//                 and Construction Equipment</b>.
//             </p>

//             <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//               We provide end-to-end engineering solutions from <b>design to real-time
//               implementation</b>, covering <b>passenger, commercial, and off-highway
//               vehicles</b>.
//             </p>

//             {/* Key Offerings - Modern Cards */}
//             <div className="mt-8 grid grid-cols-2 gap-6">
//               {[
//                 "BIW Weld Shop Lines",
//                 "Robotic Spot & MIG Welding",
//                 "Sealing & Pick-and-Place Systems",
//                 "Pedestal & Projection Welding",
//                 "Line Automation & Conveyor Systems",
//                 "Robotic Inspection Stations",
//                 "Gantry Systems & Auto Assembly Stations",
//                 "Rotary Welding Fixtures",
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center space-x-3 p-4 bg-white shadow-md rounded-lg">
//                   <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                   <p className="text-lg font-medium text-gray-800">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


