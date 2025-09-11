import React from "react";
import { motion } from "framer-motion";

const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function CTA() {
  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl rounded-3xl sm:px-16 border border-blue-500/20"
        >
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to unlock your brand's potential?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's talk about your goals and how our tailored Meta ad strategies
            can help you achieve them. Schedule a free, no-obligation discovery
            call today.
          </p>
          <motion.a
            href="https://cal.com/anson-stephan/30min"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-heading group inline-flex items-center gap-3 bg-blue-400 text-black font-bold py-2 px-6 rounded-full text-sm sm:text-lg hover:bg-white transition-all duration-300 shadow-lg shadow-blue-400/20 mt-8" // ✅ Font Applied
          >
            <img
              src="/anmol.jpg"
              alt="Anmol Avatar"
              className="w-8 h-8 rounded-full border-2 border-blue-600 group-hover:scale-110 transition-transform"
            />
            Book a Call With Anmol
          </motion.a>

          {/* Decorative elements */}
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                <stop stopColor="#ef4444" />
                <stop offset={1} stopColor="#b91c1c" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
