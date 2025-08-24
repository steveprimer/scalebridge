import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// (The PlaceholderLogoIcon and CompanyLogos components remain the same)
// ...

// Scrolling company logos
const CompanyLogos = () => {
  const logos = [
    { name: "NullvoidStudios", src: "/NullvoidStudiosJPG.jpg" },
    { name: "AromatteLuxe", src: "/AromatteLuxeJPG.png" },
    { name: "FuturoNova", src: "/FuturoNovaJPG.jpg" },
    { name: "EvoqueWear", src: "/EvoqueWearJPG.png" },
    { name: "ScaleBridge", src: "/ScaleBridgeJPG.jpeg" },
    { name: "NullvoidStudios", src: "/NullvoidStudiosJPG.jpg" },
    { name: "AromatteLuxe", src: "/AromatteLuxeJPG.png" },
    { name: "FuturoNova", src: "/FuturoNovaJPG.jpg" },
    { name: "EvoqueWear", src: "/EvoqueWearJPG.png" },
    { name: "ScaleBridge", src: "/ScaleBridgeJPG.jpeg" },
    { name: "NullvoidStudios", src: "/NullvoidStudiosJPG.jpg" },
    { name: "AromatteLuxe", src: "/AromatteLuxeJPG.png" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <p className="font-body text-center text-sm text-gray-400 mb-6">
        Trusted by 30+ agencies, startups, and consultants worldwide
      </p>
      <Marquee gradient={false} speed={40} pauseOnHover={false}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center flex-shrink-0 mx-6 opacity-70 hover:opacity-100 transition"
          >
            <img src={logo.src} alt={logo.name} className="h-12 w-auto" />
          </div>
        ))}
      </Marquee>
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
      <section
        id="home"
        className="relative min-h-fit sm:h-screen w-full bg-black text-white flex flex-col justify-start sm:justify-center overflow-hidden pt-24 sm:pt-20"
      >
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          {/* ✅ OPTIMIZED HEADING SECTION */}
          <motion.h1
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            // Adjusted line-height for better spacing
            className="font-heading max-w-5xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-9 md:mb-2 text-blue-400 leading-tight lg:leading-normal md:mt-2"
          >
            {/* Restructured into two balanced lines */}
            <motion.span className="block" variants={lineVariants}>
              We design <span className="text-white">websites</span> that
            </motion.span>
            <motion.span className="block" variants={lineVariants}>
              <span className="text-white">convert visitors</span> into loyal
            </motion.span>
            <motion.span className="block" variants={lineVariants}>
              customers.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="font-body max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed mt-9 md:mt-0"
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
            href="https://cal.com/anson-stephan/30min"
            className="font-heading group inline-flex items-center gap-3 bg-blue-400 text-black font-bold py-2 px-5 sm:px-6 rounded-full text-base sm:text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-blue-400/20"
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
          className="mt-20 sm:mt-8 w-full px-4 sm:px-6 lg:px-8"
        >
          <CompanyLogos />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
