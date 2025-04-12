import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Nill Tax Return",
    price: "$49",
    color: "text-orange-500",
    features: ["No Income", "No Expenses", "Lodge a Nil Return"],
    checkColor: "text-orange-400",
  },
  {
    title: "Basic Tax Return",
    price: "$89",
    color: "text-blue-700",
    features: ["Salary and wages", "Gov Payments", "Bank Interest"],
    checkColor: "text-blue-500",
  },
  {
    title: "Standards Tax Return",
    price: "$149",
    color: "text-blue-700",
    features: [
      "Salary and wages",
      "Gov Payments",
      "Motor Vehicle claim",
      "Bank Interest",
      "Super Contributions",
    ],
    checkColor: "text-blue-500",
  },
  {
    title: "Rental Tax Return",
    price: "$299",
    color: "text-green-600",
    features: [
      "Salary and wages",
      "Gov Payments",
      "Motor Vehicle claim",
      "Bank Interest",
      "Super Contributions",
      "Assert and Deprecation expenses",
    ],
    checkColor: "text-green-500",
  },
];

export default function PricingSection() {
  return (
    <section className="bg-white">
      <motion.div
        className="text-center pt-16 pb-8 px-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Most Affordable Tax <br />
          Service{" "}
          <span className="underline decoration-green-500">in the Market.</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Check out our packages and pick what suits you the best!
        </p>
        <div className="mt-6">
          <motion.button
            className="px-5 py-2.5 rounded-full bg-white border border-gray-300 text-teal-600 font-medium shadow-sm hover:shadow-md transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pricing Details
          </motion.button>
        </div>
      </motion.div>

      <div className="bg-Primary   pt-12 pb-24 px-4 md:px-10 shadow-[0_0_60px_rgba(0,192,255,0.3)] transition-all duration-300">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-Secondary rounded-2xl shadow-md p-6 flex flex-col justify-between min-h-[400px] hover:shadow-xl transition duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${plan.color}`}>
                  {plan.title}
                </h3>
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className={`w-5 h-5 mr-2 ${plan.checkColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12 px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-blue-600 text-white text-lg px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            File your Taxes →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
