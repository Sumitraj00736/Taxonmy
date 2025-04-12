import { motion } from "framer-motion";
import { TbPhoneCall } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

export default function ContactBanner() {
  return (
    <div className="mt-16 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-gradient-to-l from-Secondary to-[#7e93ab] text-black py-10 px-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Text Content */}
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Let’s talk about your taxes!</h2>
          <p className="text-lg text-black/80">
            Reach out today for expert help — no pressure, no cost.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center gap-2 bg-Primary  text-white font-semibold px-6 py-3 rounded-xl shadow hover:scale-105 transition-transform">
            <TbPhoneCall size={22} />
            Call Us
          </button>
          <button className="flex items-center gap-2 border-2 border-Primary  text-black px-6 py-3 rounded-xl hover:bg-Primary hover:text-white transition">
            <MdEmail size={22} />
            Email Us
          </button>
        </div>
      </motion.div>
    </div>
  );
}
