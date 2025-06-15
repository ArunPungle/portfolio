import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f0f0f]/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-28 h-16">
        {/* Logo */}
        <div
          className={`flex items-center gap-2 font-bold text-xl cursor-pointer ${
            isScrolled ? "text-white" : "text-orange-400"
          }`}
        >
          <div />
          <span className="tracking-wider">ARUN PUNGLE</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className={`${
            isScrolled ? "text-white" : "text-orange-400"
          } md:hidden`}
        >
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div
          className={`hidden md:flex items-center gap-16 ${
            isScrolled ? "text-white" : "text-orange-300"
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative text-sm font-medium tracking-wide transition duration-200 ${
                activeLink === link.href
                  ? "text-yellow-300"
                  : "hover:text-yellow-200"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-yellow-300 after:transition-all ${
                activeLink === link.href ? "after:w-full" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#getintouch"
          className={`hidden md:inline-block text-sm font-medium px-5 py-2 rounded-md shadow-sm transition-all ${
            isScrolled
              ? "bg-orange-400 text-black hover:bg-yellow-300"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          Get in touch
        </a>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1c1c1e] border-t border-gray-700 shadow-md">
          <div className="px-6 py-4 space-y-4 text-white">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setMenuOpen(false);
                }}
                className={`block text-base font-medium ${
                  activeLink === link.href
                    ? "text-yellow-300"
                    : "hover:text-orange-300"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#getintouch"
              className="block text-center bg-orange-500 text-white px-6 py-2.5 rounded-md hover:bg-yellow-400 text-sm font-medium transition-all hover:shadow-lg"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
