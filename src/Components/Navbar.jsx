import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Listen to scroll
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
          ? "bg-gradient-to-r from-purple-600 to-purple-700 shadow-md backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-28 h-16">
        {/* Logo */}
        <div
          className={`flex items-center gap-2 font-bold text-xl cursor-pointer ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          <div className="w-3.5 h-3.5 bg-current rounded-full animate-ping" />
          <span className="tracking-wider">Portfolio</span>
        </div>

        {/* Mobile toggle */}
        <div
          className={`${isScrolled ? "text-white" : "text-black"} md:hidden`}
        >
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center gap-10 ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`relative text-sm font-medium tracking-wide transition duration-200 ${
                activeLink === link.href
                  ? isScrolled
                    ? "text-yellow-300"
                    : "text-purple-600"
                  : isScrolled
                  ? "hover:text-yellow-200"
                  : "hover:text-purple-700"
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
              ? "bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-800"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          Get in touch
        </a>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="px-6 py-4 space-y-4">
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
                    ? "text-purple-600"
                    : "text-gray-800 hover:text-purple-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#newsletter"
              className="block text-center bg-purple-600 text-white px-6 py-2.5 rounded-md hover:bg-purple-700 text-sm font-medium transition-all hover:shadow-lg"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
