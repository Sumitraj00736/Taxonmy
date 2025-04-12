import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function TaxPrepHero() {
  return (
    <div className="bg-gradient-to-b from-Primary to-Secondary flex items-center justify-center px-6">
      <div className="max-w-7xl mt-24 mb-28 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Quality Tax <br />
            Preparation at the <br />
            <span className="text-blue-600">Lowest Rates!</span>
          </h1>
          <p className="text-gray-600 text-xl mb-10">
            Most Affordable Tax Preparation Service in Australia!
          </p>
          <div className="flex flex-col sm:flex-row md:justify-start justify-center gap-4">
            <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 text-xl rounded-lg shadow">
              File your Taxes <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="flex items-center justify-center bg-teal-400 hover:bg-teal-500 text-white px-7 py-4 text-xl rounded-lg shadow">
              Call us <Phone className="ml-2 w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="assets/hero1.jpg"
            alt="Tax Preparation Graphic"
            className="w-full max-w-lg rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
