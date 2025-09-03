// src/components/layout/LandingNavbar.jsx
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo3.png';

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Vendors', path: '/vendors' },
    { name: 'Venues', path: '/venues' },
    { name: 'Decor', path: '/decor' },
    { name: 'Ideas & Advice', path: '/ideas' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const navClasses = isScrolled
    ? 'bg-white shadow-lg py-2' 
    : 'bg-transparent py-4';

  const brandTextClasses = isScrolled ? 'text-red-600' : 'text-white';
  const linkTextClasses = isScrolled 
    ? 'text-gray-700 hover:text-red-600' 
    : 'text-white hover:text-red-200';

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-red-600 text-white text-sm py-2 px-4 text-center">
        <div className="container mx-auto flex justify-between items-center">
          <span>✨ Are you a vendor? <a href="/vendor-register" className="font-semibold underline">Join our platform</a></span>
          <div className="flex space-x-4">
            <span>🇪🇹</span>
            <span>⭐</span>
            <span>💍</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-8 w-full z-50 transition-all duration-300 ${navClasses}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Ethio-Wedding Planner Logo" className="h-12 w-auto" />
              <span className={`ml-3 text-xl font-bold ${brandTextClasses}`}>
                Ethio-Wedding
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className={`font-medium transition-colors duration-300 ${linkTextClasses} relative group`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="/login" 
                className={`px-4 py-2 font-medium transition-colors duration-300 ${linkTextClasses}`}
              >
                Login
              </a>
              <a 
                href="/register" 
                className="bg-red-600 text-white rounded-full px-6 py-2 font-semibold hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="text-gray-800 hover:text-red-600 font-medium py-2 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href="/login" 
                  className="block text-center text-gray-800 hover:text-red-600 font-medium py-2 transition-colors duration-300"
                >
                  Login
                </a>
                <a 
                  href="/register" 
                  className="block text-center bg-red-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LandingNavbar;