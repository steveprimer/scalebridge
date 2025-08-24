import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG for the plus/minus icon
const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5V19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ✅ FAQ content rewritten to be more conversational and include your services
const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We build pretty much anything you need to succeed online! Our main services are high-converting landing pages, full e-commerce websites, and smart AI chatbots that help automate your customer support. We handle everything from design to launch.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "We're pretty fast! A sharp landing page usually takes about a week to ten days. For a bigger, multi-page e-commerce site, you're looking at around 15 to 20 days. Of course, it all depends on the project's specifics, but we always keep you in the loop.",
  },
  {
    question: "Will I be involved in the process?",
    answer:
      "Absolutely, we want you in the driver's seat. We see it as a team effort. You'll be involved right from the start, and we use Figma for all our designs so you can drop comments and see the progress live. It's a transparent, collaborative process.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yep, we don't just launch and leave. We offer support and maintenance plans to keep your site secure, fast, and fresh. We can figure out a plan that makes the most sense for you after we go live.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "For sure. SEO is baked into everything we do. We build our sites to be super fast and mobile-friendly with clean code, which Google loves. We'll also handle all the on-page SEO basics to give you a great starting point for ranking higher.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Since every project is built from scratch just for you, we can't offer refunds once we've started. But your happiness is our top priority, which is why we include revision rounds to make sure you absolutely love the final result before we launch.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800/50">
      <button
        onClick={onClick}
        className="font-heading flex justify-between items-center w-full py-5 text-left text-lg font-medium text-white" // ✅ Font Applied
      >
        <span>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <PlusIcon />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="font-body pb-5 pr-8 text-gray-400 leading-relaxed">
              {item.answer}
            </div>{" "}
            {/* ✅ Font & Spacing Applied */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="faq" className="bg-black text-white py-20 sm:py-24 font-body">
      {" "}
      {/* ✅ Font Applied */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-heading text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
            {" "}
            {/* ✅ Font Applied */}
            Questions?
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            We got answers.
          </h2>{" "}
          {/* ✅ Font Applied */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-2"
        >
          {faqData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AccordionItem
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
