// src/components/landing/HowItWorksSection.jsx

import React from 'react';

// The steps data remains the same.
const steps = [
  {
    number: '1',
    title: 'Create Your Account',
    description: 'Sign up for free in just a few clicks. Tell us about your dream wedding to get started.',
  },
  {
    number: '2',
    title: 'Personalize Your Plan',
    description: 'Access our powerful tools. Manage your budget, guest list, and checklists all in one place.',
  },
  {
    number: '3',
    title: 'Connect With Vendors',
    description: 'Discover and book top-rated vendors that match your unique style and budget effortlessly.',
  },
];

const HowItWorksSection = () => {
  return (
    // Section with a background image
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat" 
      // Add the path to your wedding background image here
      // For example, if your image is in public/images/wedding-bg.jpg, the path would be '/images/wedding-bg.jpg'
      style={{ backgroundImage: "url('/src/assets/images/wedding4.png')" }}
    >
      {/* Overlay to darken the background image, making the text more readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Container for the content, positioned above the overlay */}
      <div className="container mx-auto px-6 relative z-10">

        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Your Journey Starts Here
        </h2>
        <p className="text-center text-white text-lg mb-16">Planning your perfect day in three simple steps.</p>
        
        {/* Timeline Container */}
        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* The vertical timeline bar - made it a bit thicker and a lighter red */}
          <div className="absolute border-2-2 border-white h-full border" style={{left: '50%'}}></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              // Alternating steps left and right
              className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
            >
              <div className="order-1 w-5/12"></div>

              {/* The numbered circle in the middle - using a deep red */}
              <div className="z-20 flex items-center order-1 bg-red-800 shadow-xl w-14 h-14 rounded-full">
                <h3 className="mx-auto font-bold text-xl text-white">{step.number}</h3>
              </div>

              {/* The content card - using a semi-transparent white for an elegant look */}
              <div className="order-1 bg-white bg-opacity-90 rounded-lg shadow-xl w-5/12 px-6 py-4 transform hover:scale-105 transition-transform duration-300">
                <h3 className="font-bold text-red-900 text-2xl mb-3">{step.title}</h3>
                <p className="text-base leading-snug tracking-wide text-gray-700">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;