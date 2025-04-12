import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-Secondary py-4 shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img
            src="/assets/logo.png"
            alt="Taxonmy Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-[16px] font-medium text-[#0a2e36]">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/tax" className="hover:text-blue-500">Tax</Link>
          <Link to="/business-services" className="hover:text-blue-500">Business Services</Link>
          <Link to="/financial-services" className="hover:text-blue-500">Financial Services</Link>
          <Link to="/franchise" className="hover:text-blue-500">Franchise</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Phone Button */}
        <div className="hidden md:flex bg-[#d9f7f7] text-[#0a2e36] px-4 py-2 rounded-lg items-center space-x-2">
          <span className="font-semibold">1300 775 995</span>
          <span className="border-l border-gray-400 h-5 mx-1"></span>
          <FaPhoneAlt />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-[#0a2e36]" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white px-6 py-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 text-[#0a2e36] font-medium">
          <Link to="/" onClick={closeMenu} className="hover:text-blue-500">Home</Link>
          <Link to="/tax" onClick={closeMenu} className="hover:text-blue-500">Tax</Link>
          <Link to="/business-services" onClick={closeMenu} className="hover:text-blue-500">Business Services</Link>
          <Link to="/financial-services" onClick={closeMenu} className="hover:text-blue-500">Financial Services</Link>
          <Link to="/franchise" onClick={closeMenu} className="hover:text-blue-500">Franchise</Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-blue-500">Contact</Link>
          <div className="flex items-center bg-[#d9f7f7] px-4 py-2 rounded-lg space-x-2">
            <span className="font-semibold">1300 775 995</span>
            <span className="border-l border-gray-400 h-5 mx-1"></span>
            <FaPhoneAlt />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
