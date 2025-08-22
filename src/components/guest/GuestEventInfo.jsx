// src/components/guest/GuestEventInfo.jsx
import React from 'react';

export default function GuestEventInfo({ date, time, venue, address }) {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* WHEN */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">When</h3>
          <p className="text-lg text-gray-600">{date}</p>
          <p className="text-lg text-gray-600">{time}</p>
        </div>
        {/* WHERE */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Where</h3>
          <p className="text-lg font-bold text-gray-700">{venue}</p>
          <p className="text-lg text-gray-600">{address}</p>
        </div>
      </div>
      <div className="mt-8 border-t pt-6">
        <a href={mapLink} target="_blank" rel="noopener noreferrer" className="bg-rose-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-rose-600 transition-transform duration-300">
          Get Directions
        </a>
      </div>
    </div>
  );
}