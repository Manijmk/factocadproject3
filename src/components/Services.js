// import React from 'react';

// const Services = () => {
//   // Service data
//   const services = [
//     {
//       icon: '🏗️', // Replace with actual icons
//       title: 'Construction',
//       description: 'We provide end-to-end construction services for residential and commercial projects.',
//     },
//     {
//       icon: '🏠', // Replace with actual icons
//       title: 'Renovation',
//       description: 'We specialize in renovating and remodeling existing structures to meet modern standards.',
//     },
//     {
//       icon: '🔧', // Replace with actual icons
//       title: 'Maintenance',
//       description: 'We offer comprehensive maintenance services to keep your property in top condition.',
//     },
//     {
//       icon: '📐', // Replace with actual icons
//       title: 'Architecture',
//       description: 'Our architects design innovative and functional spaces tailored to your needs.',
//     },
//     {
//       icon: '🚧', // Replace with actual icons
//       title: 'Project Management',
//       description: 'We manage your construction projects from start to finish, ensuring quality and efficiency.',
//     },
//     {
//       icon: '🏢', // Replace with actual icons
//       title: 'Consulting',
//       description: 'We provide expert advice to help you make informed decisions about your projects.',
//     },
//   ];

//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         {/* Title and Subtitle */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-playfair font-bold text-secondary mb-4">
//             Our Services
//           </h2>
//           <p className="text-xl font-roboto text-gray-600 max-w-2xl mx-auto">
//             We offer a wide range of services to help your business grow and succeed. Our team of experts is here to support you every step of the way.
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-lg shadow-lg text-center hover:bg-primary hover:text-white transition-all duration-300 group"
//             >
//               <div className="text-4xl text-primary mb-4 group-hover:text-white">
//                 {service.icon}
//               </div>
//               <h3 className="text-2xl font-playfair font-bold text-secondary mb-4 group-hover:text-white">
//                 {service.title}
//               </h3>
//               <p className="text-lg font-roboto text-gray-600 group-hover:text-white">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React from "react";
import { Link } from "react-router-dom";
import DigitalManufacturingPicture from "../assests/images/BG 1.png";
import Staffing from "../assests/images/staffing-1.jpg";
import LeanManufacImg from "../assests/images/ManufacturingEngineering.png";

const services = [
  {
    title: "Digital Manufacturing",
    description:
      "We provide cutting-edge digital solutions to optimize manufacturing processes, enhance automation, and drive efficiency.",
     image: DigitalManufacturingPicture ,
     link: "/services/digital-manufacturing",
  },
  {
    title: "Staffing",
    description:
      "We offer skilled professionals for manufacturing, automation, and engineering roles, ensuring the right talent for your needs.",
   image:  Staffing ,
   link: "/services/staffing",
  },
  {
    title: "Lean Manufacturing",
    description:
      "Our Lean Manufacturing solutions help businesses eliminate waste, improve productivity, and enhance operational efficiency.",
    image:LeanManufacImg ,
    link: "/services/lean-manufacturing",
  },
];

const Services = () => {
  return (
    <section className="py-16 mt-10 bg-white">
    <div className="container mx-auto px-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
          Our Services
        </h3>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="group bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover rounded-md mb-6 transition-transform group-hover:scale-105"
            />
            <h4 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h4>
            <p className="text-gray-600">{service.description}</p>
            <Link
                to={service.link}
                className="mt-4 inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg rounded-md transition"
              >
                Learn More
              </Link>

          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Services;
