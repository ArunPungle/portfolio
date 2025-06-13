import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import HeroSection from "./HeroSection";
import Projects from "./Projects";
import Contactpage from "./Contactpage";
import Footer from "./Footer";

const HeroSection1 = () => {
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
                distance: 130,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.3,
                outModes: "bounce",
              },
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
        <div className="max-w-2xl z-10 space-y-6 md:text-left text-center md:pl-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-orange-400 text-lg font-semibold tracking-wide">
              🚀 Welcome to my portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              Hi, I'm Arun Pungle
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-xl">
              Fullstack Java Developer passionate about building scalable
              backend systems and elegant frontend UIs using Java, Spring Boot,
              React, and Tailwind CSS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-all"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="/my_resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-orange-400 text-orange-400 px-6 py-3 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-all"
              >
                Download Resume <Download size={18} />
              </a>
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
            src="/Boy.png"
            alt="Developer Avatar"
            initial={{ boxShadow: "0 0 80px rgba(255,165,0,0.4)" }}
            animate={{
              boxShadow: [
                "0 0 80px rgba(255,165,0,0.4)",
                "0 0 120px rgba(255,165,0,0.6)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-full max-w-md object-contain"
          />
        </motion.div>
      </section>

      {/* Other Sections */}
      <HeroSection />
      <Projects />
      <Contactpage />
      <Footer />
    </>
  );
};

export default HeroSection1;
