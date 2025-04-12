import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-Secondary text-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo + Address */}
        <div>
          <img
            src="/assets/Taxonmy_logo.png"
            alt="Taxonmy Logo"
            className="h-28 mb-4"
          />
          <p className="text-sm mb-2">
            Address: 138 Juliette Street,<br />
            Greenslopes, QLD, Australia 4120
          </p>
          <p className="text-sm">Email us at info@taxonmy.com</p>
        </div>

        {/* About Section */}
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact-us" className="hover:underline">Contact us</Link></li>
            <li><Link to="/blogs" className="hover:underline">Blogs</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/online-tax-form" className="hover:underline">Online Tax Form</Link></li>
            <li><Link to="/tax-calculator" className="hover:underline">Tax Calculator</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
