import React from "react";
import { motion } from "framer-motion";

// --- SVG Icons ---
const CheckIcon = (props) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const FeatureItem = ({ children }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.li variants={itemVariants} className="flex items-start gap-3">
      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-400/20 text-blue-400">
        <CheckIcon className="h-4 w-4" />
      </div>
      <span className="text-gray-300">{children}</span>
    </motion.li>
  );
};

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-black text-white relative py-20 sm:py-32">
      {/* Decorative background gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-800/70 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <svg x="50%" y={-13} className="overflow-visible fill-gray-900/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Main content section with animations */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-400">
                Your Growth Partner
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Built to drive results
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                We operate as an extension of your team, providing the expertise
                and dedication needed to turn your ad spend into measurable
                revenue.
              </p>
              {/* Feature list with staggered animation */}
              <motion.ul
                role="list"
                className="mt-10 space-y-4 text-base leading-7"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <FeatureItem>
                  Direct focus on increasing your Return On Ad Spend (ROAS).
                </FeatureItem>
                <FeatureItem>
                  Fully transparent reporting so you always know how your
                  campaigns are performing.
                </FeatureItem>
                <FeatureItem>
                  Dedicated account managers who understand the nuances of your
                  brand.
                </FeatureItem>
                <FeatureItem>
                  Proactive strategies to stay ahead of algorithm changes and
                  market trends.
                </FeatureItem>
              </motion.ul>
            </div>
          </motion.div>
          {/* Image container with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div
              className="rounded-xl bg-gray-900/40 border border-blue-400/20 shadow-2xl shadow-blue-500/10
                  w-[260px] sm:w-[300px] md:w-[400px] aspect-square p-3"
            >
              <img
                src="/dashboard.jpg"
                alt="Analytics Dashboard"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
