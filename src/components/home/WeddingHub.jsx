// src/components/home/WeddingHub.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// --- BACKGROUND IMAGES FOR THE CARDS ---
// Add 3 beautiful, relevant images to your `src/assets/images/hub/` folder
import budgetImage from '../../assets/images/hub/budget.jpg';
import guestsImage from '../../assets/images/hub/guests.jpg';
import vendorsImage from '../../assets/images/hub/vendors.jpg';

const HubCard = ({ to, image, title, description }) => (
  <Link to={to} className="group relative block rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 h-80">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    {/* Content */}
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-3xl font-serif font-bold mb-2">{title}</h3>
      <p className="opacity-90 mb-4">{description}</p>
      <span className="font-semibold group-hover:underline">
        Get Started &rarr;
      </span>
    </div>
  </Link>
);

export default function WeddingHub() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-serif text-gray-800 font-bold">Your Wedding Hub</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Everything you need, right at your fingertips. Let's start planning the most important parts of your day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Budget Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <HubCard
              to="/budget" // Links to the budget page
              image={budgetImage}
              title="Manage Your Budget"
              description="Keep track of every expense and stay on financial track."
            />
          </div>

          {/* Guest List Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <HubCard
              to="/guests" // Links to the guest list page
              image={guestsImage}
              title="Organize Your Guest List"
              description="Manage RSVPs and seating with our intuitive tools."
            />
          </div>

          {/* Vendors Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <HubCard
              to="/vendors" // Links to the vendor marketplace
              image={vendorsImage}
              title="Find Your Dream Team"
              description="Discover and connect with our network of trusted vendors."
            />
          </div>

        </div>
      </div>
    </section>
  );
}