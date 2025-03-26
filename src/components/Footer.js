import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaX, FaXTwitter } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              FACTOCAD is a specialized in automotive Turnkey Automation Solution provider for all kind of work in  different applications and requirements.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><p onClick={() => navigate("/")} className="text-gray-400 hover:text-white transition duration-300">Home</p></li>
              <li><p onClick={() => navigate("/about")} className="text-gray-400 hover:text-white transition duration-300">About</p></li>
              <li><p onClick={() => navigate("/services")} className="text-gray-400 hover:text-white transition duration-300">Services</p></li>
              <li><p onClick={() => navigate("/career")} className="text-gray-400 hover:text-white transition duration-300">Careers</p></li>
              <li><p onClick={() => navigate("/contact")} className="text-gray-400 hover:text-white transition duration-300">Contact</p></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="text-gray-400 space-y-2">
              <li>FACTOCAD ROBOTICS AND AUTOMATION INDIA PVT LTD</li>
              <li>No.941,Pasumpon Nagar, Kilpudhupakkam Salai,</li>
              <li>Cheyyar -604407</li>
              <li>Email: sales@factocad-robotics.com</li>
              {/* <li>Phone: +123 456 7890</li> */}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition duration-300">
                <FaFacebookF className="mr-2" /> 
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition duration-300">
                <FaXTwitter className="mr-2" /> 
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition duration-300">
                <FaInstagram className="mr-2" /> 
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition duration-300">
                <FaLinkedinIn className="mr-2" /> 
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FACTOCAD ROBOTICS AND AUTOMATION INDIA PVT LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;