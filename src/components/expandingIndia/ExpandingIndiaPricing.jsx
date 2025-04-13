import React from 'react'

const ExpandingIndiaPricing = () => {
  return (
    <div className="bg-white p-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
        Transparent pricing based on your needs
      </h2>

      <div className=" max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center">
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

      </div>
    </div>
  )
}

export default ExpandingIndiaPricing
