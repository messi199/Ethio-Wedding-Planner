// src/components/landing/WhyChooseSection.jsx
import React, { useState } from 'react';

// Modern SVG Icons with light red color
const ExperienceIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l3 3"></path>
  </svg>
);

const CompaniesIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
  </svg>
);

const VerifiedIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
  </svg>
);

const WeddingIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
  </svg>
);

const WhyChooseSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const features = [
    {
      number: '5+',
      title: 'Years Experience',
      description: 'Pioneering wedding marketplace in Ethiopia.',
      icon: <ExperienceIcon />,
      readMore: true
    },
    {
      number: '1,200+',
      title: 'Trusted Companies',
      description: 'Find the best wedding service providers in Ethiopia',
      icon: <CompaniesIcon />,
      readMore: true
    },
    {
      number: '100%',
      title: 'Verified Services',
      description: 'We pre-select & verify every wedding service provider.',
      icon: <VerifiedIcon />,
      readMore: true
    },
    {
      number: '100+',
      title: 'Real Weddings',
      description: 'We help couples find the best wedding providers.',
      icon: <WeddingIcon />,
      readMore: true
    }
  ];

  const stats = [
    { value: '5K+', label: 'Happy Couples', id: 'couples' },
    { value: '98%', label: 'Success Rate', id: 'success' },
    { value: '24/7', label: 'Support', id: 'support' },
    { value: '100%', label: 'Verified', id: 'verified' }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Light decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-red-100 rounded-full -translate-x-24 -translate-y-24 opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-100 rounded-full translate-x-28 translate-y-28 opacity-30"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            WHY CHOOSE <span className="text-red-400">ETHIO-WEDDING</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer the most comprehensive wedding planning platform in Ethiopia, 
            designed to make your special day absolutely perfect.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-white rounded-xl border border-red-100 transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-100 transition-colors duration-300 text-red-400">
                  {feature.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-red-300 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  {feature.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-red-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {feature.description}
              </p>
              
              {/* Read More Link */}
              {feature.readMore && (
                <a 
                  href="#"
                  className="inline-flex items-center text-red-400 font-medium text-sm hover:text-red-500 transition-colors duration-300 group/readmore border-b border-transparent hover:border-red-400 pb-1"
                >
                  READ MORE
                  <svg className="w-4 h-4 ml-2 transform group-hover/readmore:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Stats Banner with Hover Effects */}
        <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-xl p-8 text-center shadow-inner mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 cursor-default ${
                  hoveredStat === stat.id 
                    ? 'bg-white shadow-lg transform scale-105 text-red-500' 
                    : 'bg-transparent text-gray-700'
                }`}
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 ${
                  hoveredStat === stat.id ? 'text-red-500' : 'text-gray-800'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm uppercase tracking-wide transition-colors duration-300 ${
                  hoveredStat === stat.id ? 'text-red-500 font-semibold' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Quick Planning
            </h3>
            <p className="text-gray-600 text-sm">
              Our couples save an average of 20+ hours in planning time using our comprehensive tools and vendor network.
            </p>
          </div>
          
          <div className="bg-red-50 rounded-xl p-6 border border-red-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Quality Assurance
            </h3>
            <p className="text-gray-600 text-sm">
              Every vendor undergoes a rigorous verification process to ensure you receive only the highest quality services.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="/register"
            className="inline-flex items-center px-8 py-4 bg-red-400 text-white rounded-xl font-semibold hover:bg-red-500 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg tracking-wide text-sm"
          >
            Start Planning Today
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          
          <p className="text-gray-500 text-sm mt-4">
            Join thousands of couples who found their perfect wedding through our platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;