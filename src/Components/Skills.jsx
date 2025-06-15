import React from "react";
import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";
import { DiVisualstudio, DiEclipse } from "react-icons/di";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: <FaJava size={40} className="text-[#f89820]" /> },
  {
    name: "Spring Boot",
    icon: <SiSpringboot size={40} className="text-[#6DB33F]" />,
  },
  { name: "React Js", icon: <FaReact size={40} className="text-[#61DBFB]" /> },
  {
    name: "TailwindCss",
    icon: <SiTailwindcss size={40} className="text-[#38BDF8]" />,
  },
  { name: "My SQL", icon: <SiMysql size={40} className="text-[#00758F]" /> },
  {
    name: "Vs Code",
    icon: <DiVisualstudio size={40} className="text-[#007ACC]" />,
  },
  {
    name: "Eclipse",
    icon: <DiEclipse size={40} className="rounded-full text-[#2C2255]" />,
  },
];

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen items-center justify-between px-6 sm:px-10 lg:px-3 pt-40 text-white overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1e] to-[#2c2c2e]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-28 text-orange-500">🛠 Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 ">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center space-y-2 group cursor-pointer"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div className="transition duration-300 group-hover:text-orange-500">
                {skill.icon}
              </motion.div>
              <motion.p className="text-sm font-medium transition duration-300 group-hover:text-orange-500">
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
