import React from "react";
import { motion } from "framer-motion";

// Placeholder logo
const PlaceholderLogoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-500"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Scrolling company logos
const CompanyLogos = () => {
  const logos = [
    { name: "NullvoidStudios", icon: <PlaceholderLogoIcon /> },
    { name: "TechWave", icon: <PlaceholderLogoIcon /> },
    { name: "FuturoNova", icon: <PlaceholderLogoIcon /> },
    { name: "DigitalPioneers", icon: <PlaceholderLogoIcon /> },
    { name: "ScaleBridge", icon: <PlaceholderLogoIcon /> },
    { name: "premiumlabs", icon: <PlaceholderLogoIcon /> },
    { name: "DesignSphere", icon: <PlaceholderLogoIcon /> },
    { name: "mediaX", icon: <PlaceholderLogoIcon /> },
  ];

  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <p className="text-center text-sm text-gray-400 mb-6">
        Trusted by 30+ agencies, startups, and consultants worldwide
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {extendedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center flex-shrink-0 text-gray-400 font-medium text-lg italic mx-6"
            >
              {logo.icon}
              <span className="ml-2">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.4 } },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: -25, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 40s linear infinite;
        }
      `}</style>

      <section
        id="home"
        className="relative h-screen w-full bg-black text-white flex flex-col justify-center overflow-hidden pt-20" // Added padding top to account for fixed navbar
      >
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-blue-400 leading-tight"
          >
            <motion.span className="block" variants={lineVariants}>
              We design websites that
            </motion.span>
            <motion.span className="block" variants={lineVariants}>
              convert visitors into loyal
            </motion.span>
            <motion.span className="block" variants={lineVariants}>
              customers.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10"
          >
            We focus on strategic design and flawless execution
            <br />
            to create websites that deliver tangible results and a powerful
            return on investment.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.0,
              type: "spring",
              stiffness: 120,
            }}
            href="#contact"
            className="group inline-flex items-center gap-3 bg-blue-400 text-black font-bold py-2 px-6 rounded-full text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-blue-400/20"
          >
            <img
              src="/anson.jpg"
              alt="Anson Avatar"
              className="w-8 h-8 rounded-full border-2 border-blue-600 group-hover:scale-110 transition-transform"
            />
            Book a Call With Anson
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="absolute bottom-10 left-0 right-0 px-4 sm:px-6 lg:px-8"
        >
          <CompanyLogos />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
