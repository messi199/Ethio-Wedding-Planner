// src/components/layout/Footer.jsx
import React from 'react';
import ringsImage from '../../assets/images/rings.png'; 

const Footer = () => {
  // Categories data
  const categories = [
    'Venue',
    'Dresses',
    'Florist',
    'Cake',
    'Photographer',
    'Music DJ'
  ];

  // Locations data
  const locations = [
    'Addis Ababa',
    'Adama',
    'Bahir Dar',
    'Jimma',
    'Hawassa',
    'Bishoftu'
  ];

  // Quick links
  const quickLinks = [
    'Home',
    'About',
    'Contact Us',
    'Terms & Conditions',
    'Partner Policy'
  ];

  return (
    <footer 
      className="relative bg-cover bg-center bg-no-repeat pt-16 pb-8"
      style={{ backgroundImage: `url(${ringsImage})` }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gray-900 opacity-90"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-red-400">Ethio-Wedding Planner</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Ethiopia's #1 wedding planning & marketplace platform. We offer the largest wedding directory 
              for local wedding companies in Ethiopia, helping couples create their perfect day.
            </p>
            <a 
              href="/about" 
              className="inline-flex items-center text-red-400 font-semibold hover:text-red-300 transition-colors duration-300"
            >
              Know More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-red-500 pb-2">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a 
                    href={`/vendors/${category.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-red-300 transition-colors duration-300 text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white border-b border-red-500 pb-2">Locations</h4>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index}>
                  <a 
                    href={`/locations/${location.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-300 hover:text-red-300 transition-colors duration-300 text-sm"
                  >
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & App Download */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 border-t border-gray-700">
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                22, Addis Ababa
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +251 936 515 136
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info@ethio-wedding.com
              </p>
            </div>
          </div>

          {/* App Download */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Download the Ethio-Wedding App</h4>
            <p className="text-gray-300 mb-4 max-w-md">
              Plan your wedding wherever and whenever you want on our mobile app.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center bg-black bg-opacity-70 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.924 17.315c-.057.174-.193.332-.348.367-.156.035-.343-.047-.483-.183-.135-.139-.214-.33-.164-.506.053-.174.188-.332.345-.367.157-.035.345.047.484.183.136.139.215.33.166.506zm-2.14-3.006c-1.026-1.207-2.442-1.823-3.815-1.823-1.376 0-2.192.616-2.192.616s-.306-.385-.836-.385c-.53 0-1.374.385-1.374.385s-1.026-.616-2.4-.616c-1.374 0-2.79.616-3.816 1.823-1.712 2.012-1.44 6.672.27 8.676 1.71 2.004 3.36 1.68 4.14 1.68.78 0 1.17.616 2.4.616 1.23 0 1.62-.616 2.4-.616.78 0 2.43.324 4.14-1.68 1.71-2.004 1.982-6.664.27-8.676zm-1.32-5.706c.576-.7.966-1.674.966-2.643 0-.136-.012-.27-.033-.402-1.036.042-2.28.71-3.024 1.587-.528.62-.99 1.593-.99 2.567 0 .148.018.294.048.435.096.036.246.054.402.054.78 0 1.65-.432 2.31-1.197zm-8.982 2.643c0-.974.462-1.947.99-2.567.744-.877 1.988-1.545 3.024-1.587-.021.132-.033.266-.033.402 0 .97.39 1.943.966 2.643.66.765 1.53 1.197 2.31 1.197.156 0 .306-.018.402-.054.03-.14.048-.287.048-.435 0-.974-.462-1.947-.99-2.567-.744-.877-1.988-1.545-3.024-1.587.021.132.033.266.033.402 0 .97-.39 1.943-.966 2.643-.66.765-1.53 1.197-2.31 1.197-.156 0-.306-.018-.402-.054-.03-.14-.048-.287-.048-.435z"/>
                </svg>
                App Store
              </a>
              <a 
                href="#" 
                className="flex items-center bg-black bg-opacity-70 text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.868 2.75C3.626 2.75 2.5 3.807 2.5 5.125c0 1.318 1.126 2.375 2.368 2.375 1.243 0 2.368-1.057 2.368-2.375 0-1.318-1.125-2.375-2.368-2.375zm15.264 0c-1.242 0-2.368 1.057-2.368 2.375 0 1.318 1.126 2.375 2.368 2.375C21.374 7.5 22.5 6.443 22.5 5.125c0-1.318-1.126-2.375-2.368-2.375zm-15.264 0A2.368 2.368 0 0 0 2.5 5.125c0 1.318 1.126 2.375 2.368 2.375 1.243 0 2.368-1.057 2.368-2.375 0-1.318-1.125-2.375-2.368-2.375zm15.264 0a2.368 2.368 0 0 0-2.368 2.375c0 1.318 1.126 2.375 2.368 2.375 1.243 0 2.368-1.057 2.368-2.375 0-1.318-1.126-2.375-2.368-2.375zM4.868 2.75h15.264v14.25H4.868V2.75zm0 14.25v4.25h15.264v-4.25H4.868zm0 4.25h15.264v2.375H4.868V21.25zm15.264 0H4.868v2.375h15.264V21.25z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ethio-Wedding Planner. All rights reserved.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={`/${link.toLowerCase().replace(' ', '-')}`} 
                  className="text-gray-400 hover:text-red-300 text-sm transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;