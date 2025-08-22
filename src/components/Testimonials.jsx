import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "From design to launch, ScaleBridge made the entire process seamless. Our new website now truly reflects our brand's identity and has already boosted our engagement.",
    name: "Vanshith Merugu",
    title: "Founder, WassupMediaCo",
    avatar: "https://placehold.co/48x48/001233/FFFFFF?text=VM",
  },
  {
    quote:
      "Our e-commerce platform now runs smoother and faster than ever. ScaleBridge's expertise made a real difference in our conversion rates.",
    name: "Ruby Liza",
    title: "Freelancer",
    avatar: "https://placehold.co/48x48/001233/FFFFFF?text=RL",
  },
  {
    quote:
      "ScaleBridge revamped our e-commerce store, and sales have never been better. The site is now faster and more user-friendly, which our customers love.",
    name: "Khushi",
    title: "Founder, Khushiva",
    avatar: "https://placehold.co/48x48/001233/FFFFFF?text=K",
  },
  {
    quote:
      "My website was slow and clunky—ScaleBridge fixed everything. Now it looks amazing and works like a dream. I couldn't be happier with the result.",
    name: "Ian",
    title: "Freelancer",
    avatar: "https://placehold.co/48x48/001233/FFFFFF?text=I",
  },
  {
    quote:
      "Working with ScaleBridge was effortless. They handled everything with professionalism and delivered a high-performance platform that exceeded our expectations.",
    name: "Sparsh",
    title: "CEO, VeeZee",
    avatar: "https://placehold.co/48x48/001233/FFFFFF?text=S",
  },
  {
    quote:
      "The team took our vision and turned it into a beautifully crafted, highly functional website. The feedback from our clients has been overwhelmingly positive.",
    name: "Anson",
    title: "Developer",
    avatar: "https://placehold.co/48x48/001233/FFFFFF?text=A",
  },
];

// Hoisted function declaration prevents "not defined" at render time
function TestimonialCard({ quote, name, title, avatar }) {
  return (
    <figure className="relative w-full h-fit p-6 bg-[#0a0a0a] border border-gray-800/50 rounded-xl">
      <figcaption className="flex items-center space-x-4 mb-4">
        <img
          className="w-12 h-12 rounded-full"
          src={avatar}
          alt={name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://placehold.co/48x48/001233/FFFFFF?text=E";
          }}
        />
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-gray-400 text-sm">{title}</div>
        </div>
      </figcaption>
      <blockquote>
        <p className="text-gray-300">{quote}</p>
      </blockquote>
    </figure>
  );
}

function TestimonialsColumn({ testimonials, duration = 50, reverse = false }) {
  const items = [...testimonials, ...testimonials, ...testimonials];

  // Don’t travel the full 50%, only part of it
  const travel = reverse ? "30%" : "-30%"; // 👈 adjust this value
  const keyframes = ["0%", travel];

  return (
    <motion.div
      animate={{ y: keyframes }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-col gap-8 will-change-transform"
    >
      {items.map((t, i) => (
        <TestimonialCard key={`${t.name}-${i}`} {...t} />
      ))}
    </motion.div>
  );
}

export default function Testimonials() {
  // Split testimonials into three columns
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = [...testimonials.slice(4), ...testimonials.slice(0, 4)]; // Mix for variety

  return (
    <section id="testimonials" className="bg-black text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Hear from our <span className="text-blue-400">clients</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto h-[600px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <TestimonialsColumn testimonials={column1} duration={160} />
          <TestimonialsColumn testimonials={column2} duration={1000} reverse />
          <TestimonialsColumn testimonials={column3} duration={180} />
        </div>
      </div>
    </section>
  );
}
