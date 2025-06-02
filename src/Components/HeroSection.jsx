import React from "react";
import { motion } from "framer-motion";
import ArunImage from "../Images/arun.png";
import Navbar from "./Navbar";

const AboutSection = () => {
  return (
    <div>
      <Navbar />
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 px-6 sm:px-10 lg:px-20 pt-32 overflow-hidden"
      >
        {/* 🔶 Decorative Orange Glow */}
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] bg-orange-400 rounded-full blur-3xl opacity-20 z-0" />

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
          {/* Left Side - About Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              About Me
            </h2>
            <p className="text-gray-700 text-lg sm:text-xl">
              I'm <strong>Arun Ramesh Pungle</strong>, a passionate Fullstack
              Java Developer with a deep love for building backend APIs and
              elegant user interfaces. I work with technologies like{" "}
              <strong>Java</strong>, <strong>Spring Boot</strong>,{" "}
              <strong>React</strong>, and <strong>Tailwind CSS</strong> to
              create clean, scalable, and intuitive applications.
            </p>
            <p className="text-gray-700 text-lg sm:text-xl">
              Whether it's designing RESTful APIs or bringing life to UI with
              animations and responsive layouts, I'm always ready to learn,
              build, and deliver value through code.
            </p>
          </motion.div>

          {/* Right Side - Circular Frame Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-lg border-8 border-white transition-transform duration-500 hover:scale-105 hover:shadow-indigo-500/50">
              <img
                src={ArunImage}
                alt="Arun R. Pungle"
                className="w-full h-full object-cover"
              />
              {/* Optional subtle glow circle */}
              <div className="absolute inset-0 rounded-full ring-4 ring-indigo-400 opacity-30 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
