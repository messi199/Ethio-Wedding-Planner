// src/components/home/AboutSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// The image should be inspiring and show happy, successful planning.
import aboutImage from '../../assets/images/about-us.jpg'; 

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* --- LEFT COLUMN: IMAGE --- */}
        <div className="animate-fade-in-left">
          <img 
            src={aboutImage} 
            alt="A happy couple collaborating on their wedding plans" 
            className="rounded-lg shadow-2xl object-cover w-full h-full" 
          />
        </div>

        {/* --- RIGHT COLUMN: DETAILED CONTENT --- */}
        <div className="animate-fade-in-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Platform</h2>
          
          {/* Our Mission */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-rose-600 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To demystify the wedding planning process, replacing stress and uncertainty with joy and confidence. We empower couples with intuitive tools, curated vendor connections, and a supportive community to bring their unique love story to life, beautifully and affordably.
            </p>
          </div>

          {/* Our Vision */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-rose-600 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To become the most trusted and beloved digital companion for every couple on their journey to "I do," creating a world where every wedding is a perfect reflection of the love it celebrates.
            </p>
          </div>

          {/* Why Choose Us? */}
          <div>
            <h3 className="text-xl font-semibold text-rose-600 mb-3">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✔</span>
                <span><strong>All-In-One Tools:</strong> From budget calculators to guest list management, everything you need is in one organized place.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✔</span>
                <span><strong>Curated Vendor Network:</strong> Connect with trusted, top-rated professionals who can make your dream day a reality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✔</span>
                <span><strong>Seamless Collaboration:</strong> Easily share updates, plans, and messages with your partner, family, and guests.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}