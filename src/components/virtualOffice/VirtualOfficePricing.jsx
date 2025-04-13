import React from "react";

const VirtualOfficePricingIndia = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
        Virtual Office Address Pricing (India)
      </h2>

      <div className="border border-gray-200 rounded-lg p-6 md:flex justify-between items-start bg-white shadow-sm">
        <ul className="space-y-3 text-gray-700 list-disc list-inside md:w-3/4">
          <li>Prestigious business address in a metro city like Mumbai, Delhi, or Bengaluru.</li>
          <li>Digital mailroom service to scan and forward business correspondence.</li>
          <li>Support for responding to Government and MCA notices.</li>
          <li>Access your mails securely from anywhere, anytime.</li>
          <li>Avoid late penalties or missed government communication.</li>
        </ul>

        <div className="mt-6 md:mt-0 text-center md:text-right md:w-1/4">
          <p className="text-xl font-bold text-gray-900 mb-2">₹7,999 per year</p>
          <button className="bg-Primary text-white px-5 py-2 rounded-md hover:bg-Secondary transition">
            Enquire now
          </button>
          <p className="text-xs text-gray-500 mt-2">
            * Government charges like MCA/ROC fees not included — to be paid separately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VirtualOfficePricingIndia;
