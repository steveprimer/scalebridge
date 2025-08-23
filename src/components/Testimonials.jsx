import React, { useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with ScaleBridge was super easy from start to finish. They handled everything, and now our site actually feels like us. We’ve already noticed way more people engaging with it.",
    name: "Lakshya Kaushal",
    title: "Founder, Nullvoid Studios",
    avatar: "/lakshya.jpg",
  },
  {
    quote:
      "Our e-commerce platform now runs smoother and faster than ever. ScaleBridge's expertise made a real difference in our conversion rates.",
    name: "Khushi",
    title: "Founder, Evoque Wear",
    avatar: "/khushi.jpg",
  },
  {
    quote:
      "ScaleBridge gave our online store a complete refresh, and the difference has been huge. The site feels faster, easier to use, and our customers are actually noticing. Sales have gone up a lot since.",
    name: "Tara",
    title: "Founder, BLING OASIS",
    avatar: "/tara.jpg",
  },
  {
    quote:
      "ScaleBridge built us a clean landing page that actually gets people to stick around. On top of that, they added an AI chatbot so visitors get answers right away. It feels like we finally have a site that works for us.",
    name: "Anmol",
    title: "Founder, FuturoNova",
    avatar: "/anmol.jpg",
  },
  {
    quote:
      "Working with ScaleBridge was effortless. They handled everything with professionalism and delivered a high-performance platform that exceeded our expectations.",
    name: "Sparsh",
    title: "CEO, Aromatte Luxe",
    avatar: "/sparsh.jpg",
  },
  {
    quote:
      "The team took our vision and turned it into a beautifully crafted, highly functional website. The feedback from our clients has been overwhelmingly positive.",
    name: "Aditya",
    title: "Developer",
    avatar: "/aditya.jpg",
  },
];

// --- Testimonial card component ---
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

// --- Seamless infinite-scrolling column ---
function TestimonialsColumn({ testimonials, speed = 30, direction = "up" }) {
  const y = useMotionValue(0);
  const firstSetRef = useRef(null);
  const [setHeight, setSetHeight] = useState(0);

  // Measure one set's height
  useLayoutEffect(() => {
    const measure = () => setSetHeight(firstSetRef.current?.offsetHeight ?? 0);
    measure();
    const ro = new ResizeObserver(measure);
    if (firstSetRef.current) ro.observe(firstSetRef.current);
    return () => ro.disconnect();
  }, []);

  // Animate continuously
  useAnimationFrame((t, delta) => {
    if (!setHeight) return;
    const dir = direction === "up" ? -1 : 1;
    const pxPerMs = speed / 1000; // speed = px/sec
    let next = y.get() + dir * pxPerMs * delta;

    // wrap smoothly
    if (next <= -setHeight) next += setHeight;
    if (next >= 0) next -= setHeight;

    y.set(next);
  });

  return (
    <div className="overflow-hidden">
      <motion.div
        style={{ y }}
        className="flex flex-col gap-8 will-change-transform"
      >
        {/* First copy (measured) */}
        <div ref={firstSetRef}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={`A-${t.name}-${i}`} {...t} />
          ))}
        </div>
        {/* Second copy (clone) */}
        <div aria-hidden>
          {testimonials.map((t, i) => (
            <TestimonialCard key={`B-${t.name}-${i}`} {...t} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// --- Main section ---
export default function Testimonials() {
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = [...testimonials.slice(4), ...testimonials.slice(0, 4)];

  return (
    <section id="testimonials" className="bg-black text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section heading */}
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

        {/* 3-column scroller */}
        {/* 1-column on mobile, 3-column on md+ */}
        <div
          className="relative max-w-5xl mx-auto overflow-hidden 
                [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        >
          {/* Mobile: single column */}
          <div className="md:hidden h-[500px]">
            <TestimonialsColumn
              testimonials={testimonials}
              speed={20}
              direction="up"
            />
          </div>

          {/* Desktop: 3-column grid */}
          <div className="hidden md:grid grid-cols-3 gap-8 h-[600px]">
            <TestimonialsColumn
              testimonials={column1}
              speed={22}
              direction="up"
            />
            <TestimonialsColumn
              testimonials={column2}
              speed={16}
              direction="down"
            />
            <TestimonialsColumn
              testimonials={column3}
              speed={26}
              direction="up"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
