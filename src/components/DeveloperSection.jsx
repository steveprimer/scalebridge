import React from "react";
import ansonImg from "../assets/anson.jpg";
import anmolImg from "../assets/anmol.jpg";
const developers = [
  {
    name: "Anson Stephan",
    role: "Full-Stack Developer & Tech Lead",

    bio: "Leads all technical development from front-end to backend, ensuring smooth performance, scalable architecture, and business-aligned solutions.",

    image: ansonImg,
    linkedin: "https://www.linkedin.com/in/anson-stephan-71132525b/",
  },
  {
    name: "Anmol Sharma",
    role: "Marketing & Growth Strategist",

    bio: "Leads marketing and growth, turning ideas into traction through strategy, content, and smart outreach.",

    image: anmolImg,
    linkedin: "https://www.linkedin.com/in/anmolsharma77/",
  },
];

const DeveloperSection = () => {
  return (
    <section
      className="bg-gradient-to-r from-black via-[#001233] to-black text-white py-0"
      id="developers"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Meet the <span className="text-blue-400">Developers</span>
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          {developers.map((dev, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-blue-800/40 rounded-xl shadow-md hover:shadow-blue-700 transition-shadow duration-700 ease-in-out text-left p-4 sm:p-6"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img
                src={dev.image}
                alt={dev.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 border-blue-500"
              />
              <h3 className="text-base sm:text-xl font-semibold text-center">
                {dev.name}
              </h3>
              <p className="text-xs sm:text-sm text-blue-300 text-center">
                {dev.role}
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-100 text-center line-clamp-3 sm:line-clamp-none">
                {dev.bio}
              </p>
              <div className="mt-3 sm:mt-4 flex justify-center">
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-medium hover:underline"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
