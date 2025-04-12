import React from "react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-white min-h-screen">
      <div className="max-w-6xl w-full bg-gradient-to-l from-Primary to-Secondary  shadow-xl rounded-xl p-6 md:p-10 flex flex-col md:flex-row">
        
        {/* Left Section */}
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <h2 className="text-3xl text-customPurple font-semibold mb-4">
            Contact Us for More Information
          </h2>
          <p className="mb-6 text-gray-800">
            If you have any questions about Tax, please submit them through this form. Our team will respond promptly.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-2xl mt-1 mr-3">🏢</span>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p>
                  Laxminagar, NewDelhi,<br />
                  Delhi 110092, India
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mt-1 mr-3">📧</span>
              <div>
                <h4 className="font-semibold">Contact</h4>
                <p>info@taxonmy.com</p>
                <p><span className="font-bold">Whatsapp:</span>+91 99909 47845</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="flex-1">
          <h2 className="text-3xl text-green-700 font-semibold mb-4">
            Complete the contact form
          </h2>
          <p className="mb-6 text-gray-800">
            Feel free to contact us; we won't spam your email.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-900"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-900"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-900"
            />
            <textarea
              placeholder="Write your message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-900 h-32"
            />
            <button
              type="submit"
              className="w-full bg-customPurple text-white py-2 rounded-md hover:bg-customGreen hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
