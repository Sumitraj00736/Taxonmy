import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const SatisfactionSection = () => {
  const stats = [
    {
      title: "95%",
      subtitle: "customer satisfaction score from 16,000 clients surveyed",
      color: "text-blue-400",
      bar: true,
    },
    {
      title: "4.9/5.0",
      subtitle: "stars from 3,418 reviews on Trustpilot",
      color: "text-green-400",
      icon: "⭐️⭐️⭐️⭐️⭐️",
    },
    {
      title: "4.9/5.0",
      subtitle: "stars from 4,100 reviews on Google",
      color: "text-yellow-400",
      icon: "⭐️⭐️⭐️⭐️⭐️",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-Primary to-Secondary text-white py-12 px-4 md:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Your satisfaction, our obsession
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {item.bar ? (
              <div className="w-full h-3 bg-blue-900 rounded-full relative overflow-hidden mx-auto max-w-[120px]">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-blue-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            ) : (
              item.icon
            )}

            <p className={`text-2xl font-bold ${item.color}`}>{item.title}</p>
            <p className="text-sm text-gray-300">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SatisfactionSection;
