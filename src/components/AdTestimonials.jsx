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

const testimonials = [
  {
    quote:
      "Working with them was a game-changer. Our return on ad spend has tripled, and we're reaching more of the right customers than ever before. Their team truly understands the Meta ads landscape.",
    author: "Tara",
    company: "Founder of BLING OASIS",
    avatar: "/tara.jpg",
  },
  {
    quote:
      "The level of detail in their reporting and their proactive approach to optimization is something we hadn't experienced with other agencies. We finally have a clear picture of our ad performance.",
    author: "Chirag",
    company: "CEO of NightCircuit Studios",
    avatar: "/chirag.jpg",
  },
  {
    quote:
      "They scaled our campaigns from a small daily budget to a major revenue driver for our business. We couldn't be happier with the results and the partnership.",
    author: "Sparsh",
    company: "Marketing Director, Aromatte Luxe",
    avatar: "/sparsh.jpg",
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-500">
            Social Proof
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Ambitious Brands
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={itemVariants}
              className="flex flex-col rounded-xl bg-gray-900/50 backdrop-blur-sm p-8 border border-blue-500/20 shadow-lg shadow-blue-500/5"
            >
              <div className="flex items-center gap-x-2 texblue-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <blockquote className="mt-4 text-lg leading-7 tracking-tight text-gray-300 flex-grow">
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <div className="mt-6 flex items-center pt-6 border-t border-white/10">
                <img
                  className="h-12 w-12 rounded-full bg-gray-800"
                  src={testimonial.avatar}
                  alt=""
                />
                <div className="ml-4">
                  <div className="text-base font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
