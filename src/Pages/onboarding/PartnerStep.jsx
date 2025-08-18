// src/pages/onboarding/PartnerStep.js

import React from 'react';

const PartnerStep = ({ data, setData, onNext }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-gray-800">Who are you planning with?</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="partnerName" className="block text-sm font-medium text-gray-700">Partner's Name</label>
          <input
            type="text"
            name="partnerName"
            id="partnerName"
            value={data.partnerName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div>
          <label htmlFor="partnerEmail" className="block text-sm font-medium text-gray-700">Partner's Email (to invite them)</label>
          <input
            type="email"
            name="partnerEmail"
            id="partnerEmail"
            value={data.partnerEmail}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
      </div>
      <button
        onClick={onNext}
        className="w-full bg-pink-500 text-white font-bold py-3 px-6 rounded-lg text-xl hover:bg-pink-600 transition duration-300"
      >
        Invite & Continue
      </button>
    </div>
  );
};

export default PartnerStep;