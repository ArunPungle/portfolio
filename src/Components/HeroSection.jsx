import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import ArunImage from "../Images/arun.png";
import Navbar from "./Navbar";

const AboutSection = () => {
  return (
    <div>
      <Navbar />
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 pt-32 overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1e] to-[#2c2c2e] text-white"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-400">
              About Me
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl">
              I'm{" "}
              <strong className="text-orange-300">Arun Ramesh Pungle</strong>, a
              passionate Fullstack Java Developer with a deep love for building
              backend APIs and elegant user interfaces. I work with technologies
              like <strong className="text-orange-300">Java</strong>,{" "}
              <strong className="text-orange-300">Spring Boot</strong>,{" "}
              <strong className="text-orange-300">My SQL</strong>,{" "}
              <strong className="text-orange-300">React</strong>, and{" "}
              <strong className="text-orange-300">Tailwind CSS</strong> to
              create clean, scalable, and intuitive applications.
            </p>
            <p className="text-gray-400 text-lg sm:text-xl">
              Whether it's designing RESTful APIs or bringing life to UI with
              animations and responsive layouts, I'm always ready to learn,
              build, and deliver value through code.
            </p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4 flex gap-10 text-2xl text-white"
            >
              <a
                href="https://www.linkedin.com/in/arun-pungle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all duration-300 hover:drop-shadow-[0_0_6px_#3b82f6]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/thenameisap_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-all duration-300 hover:drop-shadow-[0_0_6px_#ec4899]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/your-github-id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-all duration-300 hover:drop-shadow-[0_0_6px_#d1d5db]"
              >
                <FaGithub />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Circular Frame Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <div
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
              style={{ boxShadow: "0 0 50px rgba(255, 165, 0, 0.5)" }}
            >
              <img
                src={ArunImage}
                alt="Arun R. Pungle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-orange-400 opacity-30 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
