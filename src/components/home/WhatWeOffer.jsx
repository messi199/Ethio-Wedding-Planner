import React from 'react';

// Example icons (simple SVGs)
const ToolsIcon = () => <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m0-8v-2m4 6h2m-16 0h2m12-4l1.4-1.4M5.6 5.6L4.2 4.2m14.2 0l-1.4 1.4m0 12.8l1.4 1.4M5.6 18.4l1.4-1.4" /></svg>;
const VendorIcon = () => <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-4m0 4h5m0-4v-4m0 4h2" /></svg>;
const GuestIcon = () => <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 013.39-2.456m-.356 2.456a3.002 3.002 0 003.39-2.456m0 0V9a3 3 0 00-3-3h-2a3 3 0 00-3 3v.143" /></svg>;

const FeatureCard = ({ icon, title, children }) => (
  <div className="text-center p-8 bg-white rounded-lg shadow-lg border-t-4 border-rose-300 transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center justify-center h-20 w-20 mx-auto bg-rose-50 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default function WhatWeOffer() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-serif text-gray-800 font-bold">Everything You Need for "I Do"</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Our platform is thoughtfully designed to make your wedding planning journey a seamless and joyful experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <FeatureCard icon={<ToolsIcon />} title="Intuitive Planning Tools">
              From budget trackers to guest lists, manage every detail with our easy-to-use suite of planning tools.
            </FeatureCard>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <FeatureCard icon={<VendorIcon />} title="Find Your Dream Team">
              Discover and connect with a curated network of top-rated vendors who can bring your vision to life.
            </FeatureCard>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <FeatureCard icon={<GuestIcon />} title="Seamless Guest Experience">
              Keep your guests informed with a beautiful dashboard, manage RSVPs, and share important updates effortlessly.
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}