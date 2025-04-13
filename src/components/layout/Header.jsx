import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [startBusinessOpen, setStartBusinessOpen] = useState(false);
  const [accountTaxOpen, setAccountTaxOpen] = useState(false);
  const [mobileStartBusiness, setMobileStartBusiness] = useState(false);
  const [mobileAccountTax, setMobileAccountTax] = useState(false);

  const startBusinessRef = useRef();
  const accountTaxRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        startBusinessRef.current &&
        !startBusinessRef.current.contains(event.target)
      ) {
        setStartBusinessOpen(false);
      }
      if (
        accountTaxRef.current &&
        !accountTaxRef.current.contains(event.target)
      ) {
        setAccountTaxOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-Secondary p-4 shadow-sm fixed top-0 w-full bg-Secondary z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" onClick={closeMenu}>
          <img
            src="/assets/logo.png"
            alt="Taxonmy Logo"
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden md:flex space-x-8 text-[16px] font-medium text-[#0a2e36] relative">
          <div className="relative" ref={startBusinessRef}>
            <button
              onClick={() => setStartBusinessOpen(!startBusinessOpen)}
              className="hover:text-blue-500 flex items-center gap-1"
            >
              Start a business{" "}
              {startBusinessOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {startBusinessOpen && (
              <div className="absolute left-0 mt-10 bg-white rounded-xl shadow-md w-56 z-50">
                <Link
                  to="/register-company"
                  className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
                >
                  Register a Company
                </Link>
                <div className="border-t border-gray-300 my-2"></div>
                <Link
                  to="/expanding-into-india"
                  className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
                >
                  Expanding into India
                </Link>
                <div className="border-t border-gray-300 my-2"></div>
                <Link
                  to="/virtual-office"
                  className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
                >
                  Virtual Office
                </Link>
              </div>
            )}
          </div>

          <div className="relative" ref={accountTaxRef}>
            <button
              onClick={() => setAccountTaxOpen(!accountTaxOpen)}
              className="hover:text-blue-500 flex items-center gap-1"
            >
              Account and Tax{" "}
              {accountTaxOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {accountTaxOpen && (
              <div className="absolute left-0 mt-10 bg-white rounded-xl shadow-md w-56 z-50">
                <Link
                  to="/income-tax"
                  className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
                >
                  Income Tax
                </Link>
                <div className="border-t border-gray-300 my-2"></div>
          
                <Link
                  to="/gst"
                  className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
                >
                  GST
                </Link>
                <div className="border-t border-gray-300 my-2"></div>
                
                <Link
                  to="/bookkeeping"
                  className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
                >
                  Bookkeeping
                </Link>
                <div className="border-t border-gray-300 my-2"></div>
                <Link
                  to="/payroll"
                  className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
                >
                  Payroll
                </Link>
                <div className="border-t border-gray-300 my-2"></div>
              </div>
            )}
          </div>

          <Link to="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link to="/company-info" className="hover:text-blue-500">
            Company Info
          </Link>
        </nav>

        <div className="hidden md:flex bg-[#d9f7f7] text-[#0a2e36] px-4 py-2 rounded-lg items-center space-x-2">
          <span className="font-semibold">1300 775 995</span>
          <span className="border-l border-gray-400 h-5 mx-1"></span>
          <FaPhoneAlt />
        </div>

        <div
          className={`md:hidden text-2xl text-[#0a2e36] transform transition-all duration-300 ease-in-out ${
            menuOpen ? "rotate-45" : ""
          }`}
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-Secondary  transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="flex flex-col space-y-4 text-[#0a2e36] font-medium">
          <Link to="/" onClick={closeMenu} className="hover:text-blue-500">
            Home
          </Link>

          {/* Mobile Dropdowns */}
          <button
            onClick={() => setMobileStartBusiness(!mobileStartBusiness)}
            className="flex items-center justify-between hover:text-blue-500"
          >
            Start a business{" "}
            {mobileStartBusiness ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {mobileStartBusiness && (
            <div className="ml-4 space-y-2 text-[15px]">
              <Link
                to="/register-company"
                onClick={closeMenu}
                className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
              >
                Register a Company
              </Link>
              <div className="border-t border-gray-300 my-2"></div>
              <Link
                to="/expanding-into-australia"
                onClick={closeMenu}
                className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
              >
                Expanding into Australia
              </Link>
              <div className="border-t border-gray-300 my-2"></div>
              <Link
                to="/virtual-office"
                onClick={closeMenu}
                className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
              >
                Virtual Office
              </Link>
            </div>
          )}

          <button
            onClick={() => setMobileAccountTax(!mobileAccountTax)}
            className="flex items-center justify-between hover:text-blue-500"
          >
            Account and Tax{" "}
            {mobileAccountTax ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {mobileAccountTax && (
            <div className="ml-4 space-y-2 text-[15px]">
              <Link
                to="/payroll"
                onClick={closeMenu}
                className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
              >
                Payroll
              </Link>
              <div className="border-t border-gray-300 my-2"></div>
              <Link
                to="/gst"
                onClick={closeMenu}
                className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
              >
                GST
              </Link>
              <div className="border-t border-gray-300 my-2"></div>
              <Link
                to="/income-tax"
                onClick={closeMenu}
                className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
              >
                Income Tax
              </Link>
              <div className="border-t border-gray-300 my-2"></div>
              <Link
                to="/bookkeeping"
                onClick={closeMenu}
                className="block px-4 py-1 rounded-md hover:bg-gray-100 hover:underline"
              >
                Bookkeeping
              </Link>
            </div>
          )}

          <Link to="/pricing" className="hover:text-blue-500">
            Pricing
          </Link>
          <Link to="/company-info" className="hover:text-blue-500">
            Company Info
          </Link>

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
