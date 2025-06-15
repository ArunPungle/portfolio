import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#0a0a0a] via-[#161616] to-[#1f1f1f] text-gray-300 px-6 pt-2 pb-8  ">
      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-12 text-center text-xl text-gray-500">
        © {new Date().getFullYear()} Arun Pungle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
