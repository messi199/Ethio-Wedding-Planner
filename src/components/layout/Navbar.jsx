// src/components/layout/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- Fallback inline components (replaces external imports to avoid missing-module errors) ---
const SearchBox = () => (
  <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="w-48 md:w-64 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
    />
  </div>
);

const AccountDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userLinks = {
    couple: [
      { name: 'My Dashboard', path: '/dashboard/couple' },
      { name: 'Guest List', path: '/guests' },
      { name: 'My Vendors', path: '/my-vendors' },
      { name: 'Account Settings', path: '/settings' },
    ],
    guest: [
      { name: 'My Dashboard', path: '/dashboard/guest' },
      { name: 'Wedding Details', path: '/event-details' },
      { name: 'Group Chat', path: '/group' },
      { name: 'Account Settings', path: '/settings' },
    ],
    relative: [
      { name: 'Wedding Details', path: '/dashboard/relative' },
      { name: 'Group Chat', path: '/group' },
      { name: 'Find the Registry', path: '/registry' },
      { name: 'Account Settings', path: '/settings' },
    ],
  };
  const links = userLinks[user?.accountType] || [];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-full border border-transparent hover:border-gray-300"
      >
        <span>{user?.name || 'Account'}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-[60] text-gray-800">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-2 text-sm hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-gray-200 my-1"></div>
          <button
            onClick={() => console.log('User logged out')}
            className="w-full text-left block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}; 

export default function Navbar({ logo, isTransparent = false, user }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Scroll Effect Logic (no changes needed) ---
  useEffect(() => {
    if (isTransparent) {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isTransparent]);

  // --- Dynamic Navbar Styling (no changes needed) ---
  const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const transparentClasses = "bg-transparent text-white";
  const solidClasses = "bg-white text-gray-800 shadow-md";
  const navbarClasses = `${baseClasses} ${isTransparent && !isScrolled ? transparentClasses : solidClasses}`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- LEFT SIDE: Logo --- */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-10 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* --- CENTER: Desktop Navigation Links --- */}
          <div className="hidden md:flex items-baseline space-x-6">
            <Link to="/vendors" className="hover:text-rose-500 font-medium">Vendors</Link>
            <Link to="/about" className="hover:text-rose-500 font-medium">About</Link>
            {/* Your smart group link can go here */}
            <Link to="/group" className="hover:text-rose-500 font-medium">Group</Link>
            <Link to="/contact" className="hover:text-rose-500 font-medium">Contact Us</Link>
          </div>

          {/* --- RIGHT SIDE: Search & Account (Desktop) --- */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBox />
            {user && <AccountDropdown user={user} />}
          </div>

          {/* --- RIGHT SIDE: Mobile Menu Button --- */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon: Hamburger (when closed) or X (when open) */}
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* --- MOBILE MENU PANEL --- */}
      {/* This section appears below the navbar when the mobile menu is open */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 right-0 z-40">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <div className="px-2 mb-4">
              <SearchBox />
            </div>
            <Link to="/vendors" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50">Vendors</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50">About</Link>
            <Link to="/group" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50">Group</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50">Contact Us</Link>
            
            {/* Mobile Account Links */}
            {user && (
              <div className="border-t border-gray-200 pt-4">
                <p className="px-3 text-sm font-semibold text-gray-500">Welcome, {user?.name || 'Account'}</p>
                <Link to={`/dashboard/${user.accountType}`} className="block mt-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-rose-500 hover:bg-gray-50">My Dashboard</Link>
                {/* Add a logout button for mobile here */}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}