// src/components/layout/LandingNavbar.jsx

import React, { useState, useEffect } from "react";
import logo from "../../assets/logo3.png"; // Make sure this path is correct

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position (e.g., after 80px)
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = isScrolled ? "bg-white shadow-md" : "bg-transparent";

  const brandTextClasses = isScrolled ? "text-gray-800" : "text-white";
  const linkTextClasses = isScrolled
    ? "text-gray-600 hover:text-red-600"
    : "text-white hover:text-gray-200";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navClasses}`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Ethio-Wedding Planner Logo"
            className="h-10 w-auto"
          />
          <span
            className={`ml-2 text-xl font-bold transition-colors duration-300 ${brandTextClasses}`}
          >
            Ethio wedding-Planner
          </span>
        </div>
        <div>
          <a
            href="/login"
            className={`px-4 py-2 transition-colors duration-300 ${linkTextClasses}`}
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
