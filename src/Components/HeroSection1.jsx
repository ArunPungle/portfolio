import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Contact, Download, Projector } from "lucide-react";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Contactpage from "./Contactpage";
import Footer from "./Footer";

const HeroSection1 = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 pt-32 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-orange-300 opacity-30 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-30 blur-3xl rounded-full z-0" />

        {/* Content */}
        <div className="max-w-4xl w-full z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <p className="text-purple-600 text-lg font-semibold">
              🚀 Welcome to my portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Hi, I'm Arun Pungle
            </h1>

            <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
              A Fullstack Java Developer passionate about crafting backend
              systems and building beautiful, responsive frontend UIs using
              Java, Spring Boot, React, and Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="/my_resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <HeroSection />
      <Projects />
      <Contactpage />
      <Footer />
    </>
  );
};

export default HeroSection1;
