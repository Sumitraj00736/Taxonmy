import React from "react";

const RegistrationPricing = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        Transparent pricing based on your needs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Essential Card */}
        <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Essential</h3>
          <p className="text-gray-700 mb-4">
            Perfect for entrepreneurs looking to quickly register a company, and{" "}
            <strong>ensure basic compliance</strong> in the first year.
          </p>

          <p className="text-gray-500 line-through text-lg">$300/yr</p>
          <p className="text-3xl font-bold text-blue-900">$180/yr</p>
          <p className="text-sm text-gray-600 mb-4">+ ASIC fees</p>

          <button className="w-full border border-Primary text-Primary py-2 rounded-md font-semibold hover:bg-Primary hover:text-white   transition">
            Buy now
          </button>

          <h4 className="font-semibold mt-6 mb-2 text-gray-800">
            Covers the basics, like:
          </h4>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Standard Pty Ltd registration</li>
            <li>✔ ABN, GST, PAYG, TFN registrations</li>
            <li>✔ All mandatory 13 company documents produced</li>
            <li>✔ Great support by a dedicated senior ASIC agent</li>
            <li>✔ 24/7 access to all your documents</li>
            <li>✔ Yearly subscription to our ASIC compliance package</li>
          </ul>
        </div>

        {/* Essential Plus Card */}
        <div className="border-2 border-blue-300 rounded-xl p-8 shadow-md hover:shadow-lg transition bg-blue-50">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Essential Plus</h3>
          <p className="text-gray-700 mb-4">
            Ideal for <strong>fast growth businesses</strong>, looking to gain peace of mind on their entire back office, and get insights to grow.
          </p>

          <p className="text-gray-500 line-through text-lg">$2,100/yr</p>
          <p className="text-3xl font-bold text-blue-900">$1,980/yr</p>
          <p className="text-sm text-gray-600 mb-4">+ ASIC fees</p>

          <button className="w-full bg-Primary text-white py-2 rounded-md font-semibold hover:bg-gray-600 transition">
            Buy now
          </button>

          <h4 className="font-semibold mt-6 mb-2 text-gray-800">
            Includes everything in Essential, plus:
          </h4>
          <ul className="text-gray-700 space-y-2">
            <li>✔ A dedicated accountant for your company</li>
            <li>✔ Monthly bookkeeping done timely</li>
            <li>✔ Quarterly/Annual BAS/IAS</li>
            <li>✔ Full Xero & Dext subscriptions</li>
            <li>✔ Tax return preparation & filing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPricing;
