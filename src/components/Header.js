import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assests/images/factocadcover.jpg"; // Update the path to your logo image

// const Header = () => {
// const [dropdownOpen, setDropdownOpen] = useState(false);

// return (
// <header className="bg-white shadow-md py-2 fixed top-0 left-0 w-full z-50">
//   <div className="container mx-auto flex justify-between items-center px-6">
//     {/* Company Logo on the Left */}
//     <Link to="/">
//       <img src={logo} alt="Company Logo" className="h-12" />
//     </Link>

//     {/* Navigation Menu */}
//     <nav>
//       <ul className="flex space-x-6 text-gray-800 font-semibold">
//         {/* <li><Link to="/" className="hover:text-blue-500">Home</Link></li> */}
//         <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>

//         {/* Services Dropdown */}
//         <li className="relative">
//           <button 
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="hover:text-blue-500 focus:outline-none"
//           >
//             Services <i className="fas fa-angle-down ml-1"></i>
//           </button>

//           {dropdownOpen && (
//             <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
//               <li><Link to="/services/digital-manufacturing" className="block px-4 py-2 hover:bg-gray-100">Digital Manufacturing</Link></li>
//               <li><Link to="/services/staffing" className="block px-4 py-2 hover:bg-gray-100">Staffing</Link></li>
//               <li><Link to="/services/lean-manufacturing" className="block px-4 py-2 hover:bg-gray-100">Lean Manufacturing</Link></li>
//             </ul>
//           )}
//         </li>

//         <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
//         <li><Link to="/career" className="hover:text-blue-500">Career</Link></li>
//       </ul>
//     </nav>
//   </div>
// </header>
// );



const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();

  // Update active menu on route change
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (

    <header className="bg-white shadow-md py-3 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 hover:opacity-80 transition-opacity duration-200"
          />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-gray-700 font-light text-[16px] tracking-wide uppercase">
            <li>
              <Link
                to="/about"
                className={`hover:text-blue-700 transition-all duration-200 ${activeMenu === "/about" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : ""
                  }`}
              >
                About Us
              </Link>
            </li>

            {/* Services Dropdown (With Arrow Icon) */}
            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center hover:text-blue-700 transition-all duration-200 ${activeMenu.startsWith("/services") ? "text-blue-700 border-b-2 border-blue-700 pb-1" : ""
                  }`}
              >
                Services
                {/* Dropdown Arrow (Rotates when Open) */}
                <i
                  className={`fas fa-chevron-down ml-2 text-sm text-gray-700 transform transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
                    }`}
                ></i>
              </Link>

              {/* Dropdown Menu - Stays Open on Hover */}
              <ul
                className={`absolute left-0 mt-2 w-56 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform ${dropdownOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                  }`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <li>
                  <Link
                    to="/services/digital-manufacturing"
                    className="block px-5 py-3 hover:bg-blue-100 transition-colors"
                  >
                    Digital Manufacturing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/staffing"
                    className="block px-5 py-3 hover:bg-blue-100 transition-colors"
                  >
                    Staffing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/lean-manufacturing"
                    className="block px-5 py-3 hover:bg-blue-100 transition-colors"
                  >
                    Lean Manufacturing
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/contact"
                className={`hover:text-blue-700 transition-all duration-200 ${activeMenu === "/contact" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : ""
                  }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className={`hover:text-blue-700 transition-all duration-200 ${activeMenu === "/career" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : ""
                  }`}
              >
                Career
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
