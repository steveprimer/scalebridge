import React from "react";
import { motion } from "framer-motion";

// --- SVG Icons ---
// Simple, effective icons for each service.

const TargetIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const ImageIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const AnalyticsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 20V10m-6 10V4M6 20v-6" />
  </svg>
);

const GrowthIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <polyline points="18 10 12 4 6 10"></polyline>
  </svg>
);

// New SEO icon for the new service card.
const SeoIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ServiceCard = ({ icon, title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      // Responsive widths and padding for the new flexbox layout
      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(20%-1.6rem)]
      bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-blue-500/20 shadow-lg shadow-blue-500/5"
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-400 text-black mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{children}</p>
    </motion.div>
  );
};

export default function Services() {
  // Container variants for the stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="bg-black py-20 md:py-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">
            Our Approach
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A Full-Funnel Strategy for Meta Ads
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            We don't just run ads. We build comprehensive strategies that engage
            your audience at every stage, from awareness to conversion.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {/* Using a motion.div for the new flexbox container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {/* The ServiceCard components */}
            <ServiceCard
              icon={<TargetIcon />}
              title="Audience Analysis & Targeting"
            >
              We dive deep into data to identify and target your ideal
              customers, ensuring your ad spend is hyper-efficient and
              effective.
            </ServiceCard>
            <ServiceCard
              icon={<ImageIcon />}
              title="High-Converting Ad Creative"
            >
              Our team designs compelling visuals and copy that not only grab
              attention but also drive action, turning scrollers into customers.
            </ServiceCard>
            <ServiceCard
              icon={<AnalyticsIcon />}
              title="Data-Driven Optimization"
            >
              We constantly monitor campaign performance, making real-time
              adjustments to maximize your ROAS and lower acquisition costs.
            </ServiceCard>
            <ServiceCard
              icon={<GrowthIcon />}
              title="Campaign Scaling & Growth"
            >
              Once we find a winning formula, we scale your campaigns
              responsibly to drive sustainable, long-term growth for your brand.
            </ServiceCard>
            <ServiceCard icon={<SeoIcon />} title="SEO Optimization">
              We apply winning keyword and content strategies to boost your
              search rankings and expand your brand's reach.
            </ServiceCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
