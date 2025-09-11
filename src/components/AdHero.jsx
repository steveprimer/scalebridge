import React from "react";
import { motion } from "framer-motion";

// --- SVG Icons ---
const StarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function PaidAdsHero() {
  // Animation variants from your Hero.jsx
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const simpleFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonSpring = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, duration: 0.5 },
    },
  };

  return (
    <div className="bg-black text-white font-sans relative overflow-hidden">
      {/* Blue glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative isolate px-6 pt-6 lg:px-0">
        <main className="max-w-4xl mx-auto pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={simpleFadeUp}
              className="mb-8 flex items-center justify-center gap-4"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
                  src="/lakshya.jpg"
                  alt="User 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
                  src="/sparsh.jpg"
                  alt="User 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
                  src="/tara.jpg"
                  alt="User 3"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-black"
                  src="/anmol.jpg"
                  alt="User 4"
                />
              </div>
              <div className="flex items-center gap-1 text-blue-500">
                <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon />
              </div>
            </motion.div>

            {/* Main Headline with staggered animation */}
            <motion.h1
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl leading-tight"
            >
              <motion.span className="block" variants={lineVariants}>
                Ready to scale your <span className="text-blue-500">brand</span>
              </motion.span>
              <motion.span className="block" variants={lineVariants}>
                with meta ads?
              </motion.span>
            </motion.h1>

            {/* Sub-headline with delayed fade-up */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="font-body max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed mt-9 md:mt-4"
            >
              If you want to transform your ambitious brand into a
              category-king, you need
              <br />a marketing team that knows how to get you in the right
              place.
            </motion.p>

            {/* Call to Action Button with your site's styling and spring animation */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7,
                type: "spring",
                stiffness: 120,
              }}
              href="https://cal.com/anmolsharma777/30min"
              className="font-heading group mt-8 inline-flex items-center gap-3 bg-blue-400 text-black font-bold py-2 px-5 sm:px-6 rounded-full text-base sm:text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-blue-400/20"
            >
              <img
                src="/anmol.jpg"
                alt="Anmol Avatar"
                className="w-8 h-8 rounded-full border-2 border-blue-600 group-hover:scale-110 transition-transform"
              />
              Book a Call With Anmol
            </motion.a>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={simpleFadeUp}
              transition={{ delay: 1.0 }}
              className="mt-8 text-sm text-gray-500"
            >
              Trusted by 20+ brands
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
