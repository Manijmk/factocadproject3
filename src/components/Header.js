import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assests/images/factocadcover.jpg"; // Update the path to your logo image

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Company Logo on the Left */}
        <Link to="/">
          <img src={logo} alt="Company Logo" className="h-12" />
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6 text-gray-800 font-semibold">
            {/* <li><Link to="/" className="hover:text-blue-500">Home</Link></li> */}
            <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
            
            {/* Services Dropdown */}
            <li className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-500 focus:outline-none"
              >
                Services <i className="fas fa-angle-down ml-1"></i>
              </button>
              
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <li><Link to="/services/digital-manufacturing" className="block px-4 py-2 hover:bg-gray-100">Digital Manufacturing</Link></li>
                  <li><Link to="/services/staffing" className="block px-4 py-2 hover:bg-gray-100">Staffing</Link></li>
                  <li><Link to="/services/lean-manufacturing" className="block px-4 py-2 hover:bg-gray-100">Lean Manufacturing</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
            <li><Link to="/career" className="hover:text-blue-500">Career</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
