import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

// You would expand this with your actual project data
const allProjects = [
  {
    slug: "futuronova",
    name: "FuturoNova",
    logo: "/FuturoNovaJPG.jpg",
    services: ["Chatbot Development", "Web Design", "UI/UX Design"],
    industry: ["AI", "SaaS"],
  },
  {
    slug: "nightcircuit-studios",
    name: "NightCircuit Studios",
    logo: "/NullvoidStudiosJPG.jpg",
    services: ["Web Design", "Brand Development", "Content Strategy"],
    industry: ["Content Marketing", "Digital Media"],
  },
  {
    slug: "klaws",
    name: "KLAWS",
    logo: "/KlawsJPG.jpg",
    services: [
      "E-commerce Website",
      "Admin Dashboard",
      "Brand Development",
      "Product Pages",
      "Payment Integration",
    ],
    industry: ["E-commerce", "Press On Nails Brand"],
  },
  {
    slug: "nestera-fashion",
    name: "Nestera Fashion",
    logo: "/NesteraFashionJPG.jpg",
    services: [
      "E-commerce Website",
      "Brand Development",
      "Payment Integration",
      "Admin Dashboard",
      "UI/UX Design",
    ],
    industry: ["E-commerce", "Clothing Brand"],
  },
  {
    slug: "evoque-wear",
    name: "Evoque Wear",
    logo: "/EvoqueWearJPG.png",
    services: [
      "E-commerce Website",
      "Brand Development",
      "Payment Integration",
    ],
    industry: ["E-commerce", "Clothing Brand"],
  },
  {
    slug: "aromatte-luxe",
    name: "Aromatte Luxe",
    logo: "/AromatteLuxeJPG.png",
    services: [
      "E-commerce Website",
      "Brand Development",
      "Payment Integration",
    ],
    industry: ["E-commerce", "Perfume Brand"],
  },
  // Add more projects here...
];

const Tag = ({ text }) => (
  <span className="bg-gray-800 text-gray-300 text-xs font-medium mr-2 mb-2 px-2.5 py-1.5 rounded-full">
    {text}
  </span>
);

const AllCaseStudiesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="max-w-7xl mx-auto py-20 sm:py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold">
            Our <span className="text-blue-400">Success Stories</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore how we've transformed digital experiences across diverse
            industries, delivering impactful results for our clients.
          </p>
        </motion.div>

        <div className="space-y-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/case-studies/${project.slug}`}
                className="block bg-[#0a0a0a] rounded-2xl border border-gray-800/50 p-2 hover:border-blue-400/50 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:space-x-8">
                  {/* Left Side: Logo & Title */}
                  <div className="w-full md:w-2/5 flex flex-col justify-center flex-shrink-0 mb-6 md:mb-0 pr-8">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="w-full max-w-sm h-auto rounded-lg object-contain"
                    />
                    <h2 className="text-4xl font-bold mt-4 text-center">
                      {project.name}
                    </h2>
                  </div>
                  {/* Right Side: Details */}
                  <div className="w-full md:w-3/5 border-t md:border-t-0 md:border-l border-gray-800/50 pt-6 md:pt-0 md:pl-8">
                    <div className="mb-6">
                      <h3 className="text-4xl font-semibold text-gray-400 mb-8 mt-6">
                        Services Provided
                      </h3>
                      <div className="flex flex-wrap">
                        {project.services.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-3xl text-gray-400 mb-6">
                        Industry
                      </h3>
                      <div className="flex flex-wrap">
                        {project.industry.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllCaseStudiesPage;
