// src/pages/onboarding/WelcomeStep.js

import React from 'react';

const WelcomeStep = ({ onNext }) => {
  return (
    <div className="text-center space-y-6 animate-fade-in">
      <h1 className="text-4xl font-bold text-gray-800">Welcome!</h1>
      <p className="text-lg text-gray-600">
        We're so excited to help you plan your big day. Let's get a few details to personalize your journey.
      </p>
      <button
        onClick={onNext}
        className="w-full bg-pink-500 text-white font-bold py-3 px-6 rounded-lg text-xl hover:bg-pink-600 transition duration-300 transform hover:scale-105"
      >
        Let's Get Started
      </button>
    </div>
  );
};

export default WelcomeStep;