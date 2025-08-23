import React from "react";
import { motion } from "framer-motion";

// SVG for the checkmark icon
const CheckIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-blue-400"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const plans = [
  {
    title: "Landing Page",
    description: "One high-converting page, designed & built fast.",
    features: [
      "Custom design in Figma",
      "Built using React (mobile-optimized & fast-loading)",
      "3 rounds of revisions",
      "Delivered in 7-10 days",
      "Flat price. No retainers. No surprises.",
    ],
    perfectFor:
      "Perfect for campaigns, product launches, or quick marketing needs.",
  },
  {
    title: "Website",
    description: "Multi-page marketing site, handled end-to-end.",
    features: [
      "Figma design for up to 5 pages",
      "Full Stack E-commerce development",
      "Mobile-first & blazing fast",
      "3 rounds of revisions",
      "Delivered in 15-20 days",
      "SEO-ready, custom interactions, smooth UX",
    ],
    perfectFor:
      "Ideal for startups or brands needing a polished presence, fast.",
  },
];

const Plans = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="plans" className="bg-black text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Plans
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Built for teams that need fast execution.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col p-8 bg-[#0a0a0a] rounded-xl border border-gray-800/50"
            >
              <div className="flex-grow">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-400 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-6 italic">
                  {plan.perfectFor}
                </p>
                <a
                  href="https://cal.com/anson-stephan/30min" // Link to your Calendly or contact form
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-400 text-black font-bold py-3 px-6 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    Secure Your August Spot
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Plans;
