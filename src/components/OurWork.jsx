import React from "react";
import aromatteImg from "../assets/aromatte1.jpg";
import portfolioImg from "../assets/portfolio.jpg";
import chatbotImg from "../assets/chatbot.jpg";
import juteHomeDecorImg from "../assets/jute-home-decor.jpg";
import rentalCentralImg from "../assets/rental-central.jpg";

const OurWork = () => {
  const projects = [
    {
      title: "Jute Home Decor",
      description:
        "Built a sustainable, mobile-first eCommerce demo for handcrafted jute home accessories. The store showcases products with a clean UI, intuitive filtering, and a fast, secure checkout flow—designed to drive conversions while reflecting eco-conscious branding.",
      image: juteHomeDecorImg,
      link: "https://jute-home-decor.netlify.app",
    },
    {
      title: "R3ntal Central (Car Rental Demo)",
      description:
        "Developed a responsive demo for a car rental platform, focused on user trust and booking ease. Features real-time availability, streamlined inquiry flow, and integrated payment UX—showing how rentals can be made frictionless and premium using modern web tooling.",
      image: rentalCentralImg,
      link: "https://r3ntal-central.netlify.app",
    },
    {
      title: "Aromatte Luxe",
      description:
        "Helped launch a luxury fragrance brand online with a clean, fast, and mobile-first eCommerce store — complete with product showcase and online payment flow.",
      image: aromatteImg,
      link: "https://aromatteluxe.netlify.app",
    },
    {
      title: "AI Customer Support Bot",
      description:
        "Deployed an AI-powered chatbot that answers 70%+ of customer queries instantly, reducing support workload and increasing response speed.",
      image: chatbotImg,
      link: "https://aichat-support.netlify.app",
    },
    {
      title: "Developer Portfolio",
      description:
        "Clean, mobile-friendly portfolio crafted to clearly communicate services and build trust with potential clients.",
      image: portfolioImg,
      link: "https://ansonstephan.netlify.app",
    },
  ];

  return (
    <section
      id="work"
      className="bg-gradient-to-r from-black via-[#001233] to-black text-white py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12">
          Our <span className="text-blue-400">Work</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-blue-800/40 rounded-xl shadow-md hover:shadow-blue-700 transition-shadow duration-700 ease-in-out text-left p-4 sm:p-6"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md mb-3 sm:mb-4 w-full h-40 sm:h-48 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-100 mt-2 line-clamp-3 sm:line-clamp-none">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium mt-3 inline-block hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
