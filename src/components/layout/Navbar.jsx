// src/components/layout/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// This is a new component for the dropdown menu
const AccountDropdown = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        // This should clear the session/token and redirect.
        // Your backend team will likely have a '/api/auth/logout' endpoint.
        console.log("User logged out");
        // window.location.href = '/login'; // Simple redirect after logout
    };

    // Define links based on user account type
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
    };

    const links = userLinks[user.accountType] || [];

    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-transparent hover:border-gray-300"
            >
                <span>{user.name}</span>
                {/* Simple caret down icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 text-gray-800">
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
                        onClick={handleLogout}
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

  useEffect(() => {
    if (isTransparent) {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isTransparent]);

  const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  const transparentClasses = "bg-transparent text-white";
  const solidClasses = "bg-white text-gray-800 shadow-md";
  const navbarClasses = `${baseClasses} ${isTransparent && !isScrolled ? transparentClasses : solidClasses}`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/"><img className="h-10" src={logo} alt="Logo" /></Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/vendors" className="hover:text-rose-500 px-3 py-2 rounded-md font-medium">Vendors</Link>
              <Link to="/about" className="hover:text-rose-500 px-3 py-2 rounded-md font-medium">About</Link>
              <Link to="/group" className="hover:text-rose-500 px-3 py-2 rounded-md font-medium">Group</Link>
              <Link to="/contact" className="hover:text-rose-500 px-3 py-2 rounded-md font-medium">Contact Us</Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            {/* --- THIS IS THE KEY CHANGE --- */}
            {/* If a user object exists, show the dropdown. Otherwise, show nothing. */}
            {user ? (
                <AccountDropdown user={user} />
            ) : (
                <div className="h-10"></div> // Placeholder to prevent layout shift
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}