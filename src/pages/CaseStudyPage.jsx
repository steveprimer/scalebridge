import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { allProjects } from "../data/projectsData"; // Import the data
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Tag = ({ text }) => (
  <span className="inline-block bg-blue-900/30 text-blue-300 text-xs font-medium mr-2 mb-2 px-3 py-1.5 rounded-full border border-blue-800/50">
    {text}
  </span>
);

const InfoBlock = ({ title, value }) => (
  <div>
    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
      {title}
    </h3>
    <p className="text-lg text-white mt-1">{value}</p>
  </div>
);

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-black text-white h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/case-studies" className="text-blue-400 hover:underline">
          &larr; Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <main className="max-w-5xl mx-auto pt-32 pb-20 sm:pt-40 sm:pb-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/case-studies"
            className="text-blue-400 hover:underline mb-8 block"
          >
            &larr; All Projects
          </Link>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            {project.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Updated Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-12 border-y border-gray-800/50 py-8"
        >
          {/* Top Row: Client, Turnaround, Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <InfoBlock title="Client" value={project.client} />
            <InfoBlock title="Turnaround" value={project.turnaround} />
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Stack
              </h3>
              <div className="flex flex-wrap">
                {project.stack.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Rows: Industry, Scope */}
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Industry
              </h3>
              <div className="flex flex-wrap">
                {project.industry.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Scope of Work
              </h3>
              <div className="flex flex-wrap">
                {project.scope.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="rounded-lg overflow-hidden border border-gray-800/50"
        >
          <img
            src={project.mainImage}
            alt={`${project.name} main project view`}
            className="w-full"
          />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
