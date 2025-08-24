import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-5 sm:py-5 font-body"
    >
      {" "}
      {/* ✅ Font Applied */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#0a0a0a] border border-gray-800/50 rounded-2xl p-10 sm:p-5 text-center"
        >
          <p className="font-body text-sm font-semibold text-white mb-4">
            {" "}
            {/* ✅ Font Applied */}
            Only <span className="font-bold">3 slots</span> left for{" "}
            <span className="font-bold">August</span>
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-blue-400 mb-8">
            {" "}
            {/* ✅ Font Applied */}
            Ready to level up your business?
          </h2>
          <motion.a
            href="https://cal.com/anson-stephan/30min"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-heading group inline-flex items-center gap-3 bg-blue-400 text-black font-bold py-2 px-6 rounded-full text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-blue-400/20" // ✅ Font Applied
          >
            <img
              src="/anson.jpg"
              alt="Anson Avatar"
              className="w-8 h-8 rounded-full border-2 border-blue-600 group-hover:scale-110 transition-transform"
            />
            Book a Call With Anson
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
