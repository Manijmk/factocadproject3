import React, { useEffect, useRef, useState } from 'react';
import HeroBgImage from '../assests/images/bg-4.png';
import AboutImage from "../assests/images/DigitalManufacturingPicture.png";
import { Link } from "react-router-dom";
import DigitalManufacturingPicture from "../assests/images/BG 1.png";
import Staffing from "../assests/images/staffing-1.jpg";
import LeanManufacImg from "../assests/images/ManufacturingEngineering.png";
import Counter from './Counter';
import ContactForm from './ContactForm';
import CapabilitiesImage from "../assests/images/processplanning2.png";
import { motion } from "framer-motion"; // Animation Library
import { FaCogs, FaWarehouse, FaTools, FaClipboardList, FaDraftingCompass, FaProjectDiagram, FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  const services = [
    {
      title: "Digital Manufacturing",
      description:
        "We provide cutting-edge digital solutions to optimize manufacturing processes, enhance automation, and drive efficiency.",
      image: DigitalManufacturingPicture,
      link: "/services/digital-manufacturing",
    },
    {
      title: "Staffing",
      description:
        "We offer skilled professionals for manufacturing, automation, and engineering roles, ensuring the right talent for your needs.",
      image: Staffing,
      link: "/services/staffing",
    },
    {
      title: "Lean Manufacturing",
      description:
        "Our Lean Manufacturing solutions help businesses eliminate waste, improve productivity, and enhance operational efficiency.",
      image: LeanManufacImg,
      link: "/services/lean-manufacturing",
    },
  ];

  const stats = [
    { label: "Years of Experience", value: 15 },
    { label: "Projects Completed", value: 500 },
    { label: "Happy Clients", value: 120 },
    { label: "Industry Experts", value: 50 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const counterRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < stat.value) {
              newCounts[index] += Math.ceil(stat.value / 100);
            } else {
              clearInterval(intervals[index]);
            }
            return newCounts;
          });
        }, 20);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView]);

  const capabilitiesList = [
    { text: "Installation & Commissioning", icon: <FaCogs /> },
    { text: "Material Handling System Support", icon: <FaWarehouse /> },
    { text: "Tool & Equipment Installation", icon: <FaTools /> },
    { text: "Documentation & Training Manuals", icon: <FaClipboardList /> },
    { text: "3D Plant Layout", icon: <FaDraftingCompass /> },
    { text: "BOM Creation", icon: <FaProjectDiagram /> },
    { text: "Robotic Simulation", icon: <FaRobot /> },
  ];
  return (
    <>
      <section
        style={{ backgroundImage: `url(${HeroBgImage})` }}
        // className="bg-cover bg-center h-screen flex items-center relative"
        className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white"

      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        {/* Content */}

        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Digital Manufacturing Transformation
          </h1>
          <p className="mt-4 text-lg">Build and Implement Comprehensive
            Digital Frameworks and Solutions</p>
          <p
              onClick={() => navigate("/services")}
            className="mt-6 inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md transition"
          >
            Get Started
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
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
              <p
                 onClick={() => navigate("/about")}
                className="mt-8 inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg rounded-md transition"
              >
                Learn More
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-16 bg-white">
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

      {/* Capabilities */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Section Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 uppercase">Our Capabilities</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mt-2"></div>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              FACTOCAD provides cutting-edge automation and digital manufacturing solutions
              to improve efficiency, scalability, and precision in various industrial applications.
            </p>
          </motion.div>

          {/* Top - Large Image */}
          <motion.div
            className="w-full flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={CapabilitiesImage}
              alt="Manufacturing Capabilities"
              className="rounded-lg shadow-lg w-full md:max-w-5xl transform transition duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Capabilities List - Bigger Items */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {capabilitiesList.map((item, index) => (
              <div key={index} className="flex items-center gap-5 p-6 bg-white rounded-lg shadow-lg text-gray-900 font-semibold text-xl hover:bg-yellow-500 hover:text-white transition-all duration-300">
                <span className="text-3xl text-yellow-500">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      <Counter />
      <ContactForm />
    </>
  )
}

export default Home;