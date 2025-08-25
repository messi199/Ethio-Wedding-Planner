// src/components/home/WhatWeOffer.jsx

import React from "react";
import { GiftIcon, CalendarIcon, UserGroupIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useScrollAnimation } from '../../hooks/useScrollAnimation'; // Import our updated hook

const offers = [
  {
    icon: <HeartIcon className="w-10 h-10 text-rose-400" />,
    title: "Personalized Planning",
    desc: "Tailored wedding plans to bring your dream day to life.",
  },
  {
    icon: <CalendarIcon className="w-10 h-10 text-rose-400" />,
    title: "Smart Scheduling",
    desc: "Stay on track with timelines and reminders that reduce stress.",
  },
  {
    icon: <UserGroupIcon className="w-10 h-10 text-rose-400" />,
    title: "Guest Management",
    desc: "Easily manage invitations, RSVPs, and seating arrangements.",
  },
  {
    icon: <GiftIcon className="w-10 h-10 text-rose-400" />,
    title: "A Note on Gifts",
    desc: "Create and share a registry for your convenience.",
  },
];

export default function WhatWeOffer() {
  // Use the hook: it gives us a ref and a boolean `isVisible`
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    // We attach the ref to the main container
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6 text-center">
      
      {/* The Title will animate when the section is visible */}
      <h2 className={`text-4xl font-serif font-bold text-rose-600 mb-12 relative inline-block transition-all duration-700 
                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        What We Offer
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-16 h-1 bg-rose-300 rounded-full"></span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            // --- THIS IS THE NEW ANIMATION LOGIC ---
            // We use a ternary operator to switch between classes.
            // When `isVisible` is true, we apply the visible styles.
            className={`bg-pink-50 rounded-2xl shadow-md border border-rose-100 p-8 
                       hover:shadow-lg hover:scale-105 transition-all duration-500
                       ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            // The staggered delay is now a transition-delay
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="mb-4 flex justify-center">{offer.icon}</div>
            <h3 className="text-xl font-semibold text-rose-500 mb-2">
              {offer.title}
            </h3>
            <p className="text-gray-600">{offer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}