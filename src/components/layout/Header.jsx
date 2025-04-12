import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-Secondary py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="Taxonmy Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-[16px] font-medium text-[#0a2e36]">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/tax" className="hover:text-blue-500">Tax</Link>
          <Link to="/business-services" className="hover:text-blue-500">Business Services</Link>
          <Link to="/financial-services" className="hover:text-blue-500">Financial Services</Link>
          <Link to="/franchise" className="hover:text-blue-500">Franchise</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>

        {/* Phone Button */}
        <div className="bg-[#d9f7f7] text-[#0a2e36] px-4 py-2 rounded-lg flex items-center space-x-2">
          <span className="font-semibold">1300 775 995</span>
          <span className="border-l border-gray-400 h-5 mx-1"></span>
          <FaPhoneAlt />
        </div>
      </div>
    </header>
  );
};

export default Header;
