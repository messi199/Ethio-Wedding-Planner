// src/components/layout/Footer.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- 1. IMPORT FONT AWESOME ---
// This is the main component that will display the icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// This is where we import the specific icons we want to use.
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

// --- This array makes it very easy to manage your social links ---
const socialLinks = [
  { name: 'Facebook', href: '#', icon: faFacebook },
  { name: 'Instagram', href: '#', icon: faInstagram },
  { name: 'Twitter', href: '#', icon: faTwitter },
 
];

export default function Footer({ logo }) {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <img className="h-12 mb-4" src={logo} alt="Wedding Planner Logo" />
            <p className="text-gray-400 mb-6">
              Crafting unforgettable stories, one wedding at a time.
            </p>
            <form onSubmit={handleNewsletterSubmit}>
              <label htmlFor="newsletter-email" className="font-semibold text-white">Stay Inspired</label>
              <div className="mt-2 flex">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
                <button type="submit" className="bg-rose-500 text-white px-4 py-2 rounded-r-md hover:bg-rose-600 font-semibold">
                  Go
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: For Couples */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">For Couples</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/planning-tools" className="hover:text-white">Planning Tools</Link></li>
              <li><Link to="/vendors" className="hover:text-white">Find Vendors</Link></li>
              <li><Link to="/guests" className="hover:text-white">Guest List</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} Your Wedding Planner, Inc. All rights reserved.
          </p>
          
          <div className="flex space-x-6 order-1 sm:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">{item.name}</span>
                {/* --- 2. USE THE FONT AWESOME COMPONENT TO DISPLAY THE ICON --- */}
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}