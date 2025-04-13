import React from 'react'

const RegistrationBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-12">
    {/* Left Section */}
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Register your company <br />
        we’ve got you covered <br />
        from day one
      </h1>

      <p className="text-lg text-gray-700">
        For only <span className="font-semibold">₹ 11000</span> + Gov fees, you’ll get:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Your registration sorted</li>
        <li>All company documents & tax rego done</li>
        <li>Unlimited ASIC changes & fabulous support</li>
      </ul>

      <button className="bg-Primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-Secondary hover:text-black transition">
        Book a free consultation
      </button>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 relative">
      <img
        src="/assets/company_registration_consultant.jpeg" // You can replace this with your uploaded image or a local asset
        alt="Man opening store"
        className="rounded-xl w-full max-w-md object-cover"
      />
    </div>
  </div>
  )
}

export default RegistrationBanner
