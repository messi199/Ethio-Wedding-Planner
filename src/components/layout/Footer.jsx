// src/components/layout/Footer.jsx
import React from "react";
// Step 1: Make sure to import your rings.png image.
// The path might need to be adjusted based on your file structure.
// This path assumes Footer.jsx is in src/components/layout/
import ringsImage from "../../assets/images/rings.png";

// A simple array for social media links. You can add your actual links here.
const socialLinks = [
  { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
  { name: "Instagram", icon: "fab fa-instagram", url: "#" },
  { name: "Pinterest", icon: "fab fa-pinterest", url: "#" },
];

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-12"
      style={{ backgroundImage: `url(${ringsImage})` }}
    >
      {/* Dark Red Overlay for Readability */}
      <div className="absolute inset-0 bg-red-900 opacity-80"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo or Site Name */}
          <h2 className="text-3xl font-bold mb-4">Ethio-Wedding Planner</h2>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-white hover:text-red-200 transition-colors duration-300"
                aria-label={link.name}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </a>
            ))}
          </div>

          {/* Copyright Text */}
          <div className="border-t border-red-300 pt-6 w-full max-w-md mx-auto">
            <p className="text-red-100">
              &copy; {new Date().getFullYear()} Ethio-Wedding Planner. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
