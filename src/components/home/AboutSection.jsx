import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/about-us.jpg'; 

export default function AboutSection() {
  return (
    <section className="py-20 bg-pink-50 relative overflow-hidden">
      {/* Optional: floating petals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-float-slow absolute w-6 h-6 bg-rose-200 rounded-full opacity-50 top-10 left-20"></div>
        <div className="animate-float-slow absolute w-4 h-4 bg-rose-300 rounded-full opacity-40 top-1/2 right-10"></div>
        <div className="animate-float-slow absolute w-5 h-5 bg-pink-200 rounded-full opacity-50 bottom-20 left-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* IMAGE */}
        <div className="animate-fade-in-left rounded-lg shadow-2xl overflow-hidden">
          <img 
            src={aboutImage} 
            alt="A happy couple collaborating on their wedding plans" 
            className="rounded-lg object-cover w-full h-full" 
          />
        </div>

        {/* CONTENT */}
        <div className="animate-fade-in-right">
          <h2 className="text-4xl font-serif font-bold text-rose-600 mb-6">About Our Platform</h2>
          
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-rose-500 mb-2">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To demystify the wedding planning process, replacing stress and uncertainty with joy and confidence. We empower couples with intuitive tools, curated vendor connections, and a supportive community to bring their unique love story to life, beautifully and affordably.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-rose-500 mb-2">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              To become the most trusted and beloved digital companion for every couple on their journey to "I do," creating a world where every wedding is a perfect reflection of the love it celebrates.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-rose-500 mb-3">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-rose-400 mr-3 mt-1 font-bold">✔</span>
                <span><strong>All-In-One Tools:</strong> From budget calculators to guest list management, everything you need is in one organized place.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-3 mt-1 font-bold">✔</span>
                <span><strong>Curated Vendor Network:</strong> Connect with trusted, top-rated professionals who can make your dream day a reality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-3 mt-1 font-bold">✔</span>
                <span><strong>Seamless Collaboration:</strong> Easily share updates, plans, and messages with your partner, family, and guests.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
