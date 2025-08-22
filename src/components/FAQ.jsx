import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG for the plus/minus icon
const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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

const MinusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in end-to-end website development, including custom design (UI/UX), frontend development using modern frameworks like React, and backend integration. We build everything from high-converting landing pages to full-scale marketing websites and e-commerce platforms.",
  },
  {
    question: "How long does the website design process take?",
    answer:
      "A typical landing page takes about 7-10 days, while a multi-page website is usually delivered within 15-20 days. The exact timeline can vary depending on the complexity and scope of the project.",
  },
  {
    question: "Will I be involved in the design process?",
    answer:
      "Absolutely. We believe in a collaborative approach. You'll be involved from the initial discovery call to the final design approvals. We use Figma for our designs, which allows you to leave feedback and watch the project come to life in real-time.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your website remains up-to-date, secure, and performs optimally. We can discuss a plan that best fits your needs.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "Our development process is SEO-focused from the ground up. We build websites with clean code, fast loading speeds, and mobile-first principles—all of which are crucial for good search engine rankings. We can also implement on-page SEO best practices.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Due to the custom nature of our work, we don't offer refunds once a project has started. However, we are committed to your satisfaction and include multiple rounds of revisions to ensure the final product meets your expectations.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-800/50">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-white"
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
            <div className="pb-5 pr-8 text-gray-400">{item.answer}</div>
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

  return (
    <section id="faq" className="bg-black text-white py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Questions?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold">We got answers.</h2>
        </motion.div>

        <div className="space-y-2">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
