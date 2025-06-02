import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaBriefcase } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 py-8 mt-14">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-semibold">Stay Connected 😊👍</h4>
            <p className="text-sm text-gray-500">Follow me on social media</p>
          </div>
          <div className="flex space-x-6 text-2xl">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/arun-pungle?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/thenameisap_?igsh=dzg5djkwNDNtYnR5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your-github-id"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Arun Pungle. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
