import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const projects = [
  {
    title: "GanpatiTrust Portal",
    description:
      "A portal for the Shree Maha Ganpati Sansthan in Rajur. Built using React, Spring Boot, Tailwind CSS, and MySQL.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Zomato Clone",
    description:
      "Food ordering web application with separate logins for admin, user, and restaurant owners. Features include adding restaurants and managing orders.",
    tech: ["React", "Spring Boot", "JWT", "MySQL"],
    link: "#",
  },
  {
    title: "Music Player App",
    description:
      "A dynamic music app with audio controls, stylish UI, and responsive layout. Includes play/pause, next/prev, search, and login.",
    tech: ["React", "CSS", "Audio API"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section
        id="projects"
        className="min-h-screen pt-32 px-6 pb-9 sm:px-10 lg:px-20 bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1e] to-[#2c2c2e] text-white"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl">
            Here's a glimpse of the work I've built using modern web
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1e1e1f] rounded-xl shadow-lg p-6 border border-gray-700 hover:shadow-orange-500/30 transition-shadow"
            >
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-orange-400 hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
