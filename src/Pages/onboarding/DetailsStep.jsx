// src/pages/onboarding/DetailsStep.js

import React from 'react';

const DetailsStep = ({ data, setData, onSubmit }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-gray-800">Tell us about the wedding!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700">Wedding Date</label>
          <input
            type="date"
            name="weddingDate"
            id="weddingDate"
            value={data.weddingDate}
            onChange={handleChange}
            disabled={data.isDateTBD}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 disabled:bg-gray-200"
          />
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="isDateTBD"
              id="isDateTBD"
              checked={data.isDateTBD}
              onChange={handleChange}
              className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
            />
            <label htmlFor="isDateTBD" className="ml-2 block text-sm text-gray-900">We're not sure yet</label>
          </div>
        </div>
         <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Estimated Budget ($)</label>
            <input type="number" name="budget" id="budget" value={data.budget} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"/>
        </div>
        <div>
            <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700">Estimated Guest Count</label>
            <input type="number" name="guestCount" id="guestCount" value={data.guestCount} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"/>
        </div>
        <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Wedding Location (City)</label>
            <input type="text" name="location" id="location" value={data.location} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"/>
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg text-xl hover:bg-green-600 transition duration-300"
      >
        Take Me to My Dashboard!
      </button>
    </div>
  );
};

export default DetailsStep;