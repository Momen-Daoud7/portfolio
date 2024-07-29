import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value based on your header height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Process", link: "#work-process" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Articles", link: "#articles" },
  ];

  return (
    <header className="py-6 px-4 md:px-6 lg:px-18 bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavHashLink
          to="#"
          scroll={scrollWithOffset}
          className="text-2xl font-bold tracking-tighter"
        >
          Momen
          <span className="text-[33px] ml-[1px] text-moxa-blue font-bold">
            .
          </span>
        </NavHashLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavHashLink
              key={item.name}
              to={item.link}
              scroll={scrollWithOffset}
              className="text-md text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              {item.name}
            </NavHashLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4">
          {navItems.map((item) => (
            <NavHashLink
              key={item.name}
              to={item.link}
              scroll={scrollWithOffset}
              className="block py-2 text-sm text-gray-800 hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </NavHashLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
