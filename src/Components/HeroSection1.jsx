import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, X } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Contactpage from "./Contactpage";
import Footer from "./Footer";
import Skills from "./Skills";

const HeroSection1 = () => {
  const [showResume, setShowResume] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 pt-32 text-white overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1e] to-[#2c2c2e]"
      >
        {/* ✨ Particles Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: "#f97316" },
              links: {
                color: "#f97316",
                distance: 160,
                enable: true,
                opacity: 1.15,
                width: 1,
              },
              move: { enable: true, speed: 1.3, outModes: "bounce" },
              number: { density: { enable: true, area: 800 }, value: 55 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3.5 } },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 z-0"
        />

        {/* 📝 Left Side Text */}
        <div className="max-w-2xl z-10 space-y-6 md:text-left text-center md:pl-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl pt-4 sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Transforming Ideas into Scalable Web Solutions
            </h1>

            <p className="text-gray-400 pt-6 text-lg sm:text-xl max-w-xl">
              Fullstack Java Developer passionate about building scalable
              backend systems and elegant frontend UIs using Java, Spring Boot,
              React, and Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 pt-6 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-all"
              >
                View Projects <ArrowRight size={18} />
              </a>

              {/* Show Resume Preview */}
              <button
                onClick={() => setShowResume(true)}
                className="inline-flex items-center gap-2 border border-orange-400 text-orange-400 px-6 py-3 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-all"
              >
                Show Resume <Download size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* 👨‍💻 Right Side Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:flex w-full md:w-1/2 z-10 justify-end mt-10 md:mt-0"
        >
          <motion.img
            src="/Boy1.png"
            alt="Developer Avatar"
            className="w-full max-w-2xl object-contain bg-none"
          />
        </motion.div>
      </section>

      {/* 📄 Blurry Resume Popup */}
      {showResume && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-md z-[100] flex justify-center items-center">
          <div className="relative bg-transparent rounded-xl shadow-2xl">
            {/* Top Right Buttons */}
            <div className="absolute top-0 right-0 flex gap-0 z-20">
              <a
                href="/my_resume.pdf"
                download
                className="bg-none p-2 bg-transparent hover:bg-green-300 rounded-3xl"
              >
                <Download size={20} className="text-black" />
              </a>
              <button
                onClick={() => setShowResume(false)}
                className=" p-2 bg-transparent bg-none hover:bg-red-300 rounded-3xl"
              >
                <X size={20} className="text-black" />
              </button>
            </div>

            {/* PNG Image View */}
            <img
              src="/my_resume.png"
              alt="My Resume"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-xl object-contain"
            />
          </div>
        </div>
      )}

      {/* 🔻 Other Sections */}
      <HeroSection />
      <Projects />
      <Skills />
      <Contactpage />
      <Footer />
    </>
  );
};

export default HeroSection1;
