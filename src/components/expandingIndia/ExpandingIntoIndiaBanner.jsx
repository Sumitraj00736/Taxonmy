import React from 'react'

const ExpandingIntoIndiaBanner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Looking to start a <br />
           business in India <br />
            from overseas?
          </h1>
    
          <p className="text-lg text-gray-700">
          Seamless business registration solutions tailored for international entrepreneurs          </p>
    
          <button className="bg-Primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-Secondary hover:text-black transition">
            Book a free consultation
          </button>
        </div>
    
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 relative">
          <img
            src="/assets/indiagate_delhi.jpeg" // You can replace this with your uploaded image or a local asset
            alt="Man opening store"
            className="rounded-xl w-full max-w-md object-cover"
          />
        </div>
      </div>
      )
}

export default ExpandingIntoIndiaBanner
