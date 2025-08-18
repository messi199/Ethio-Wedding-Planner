// src/components/GuestSummary.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function GuestSummary({ count }) {
  const guestCount = count || 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Guest List</h3>
        <div className="flex items-baseline space-x-2">
          <p className="text-4xl font-bold text-gray-900">{guestCount}</p>
          <span className="text-gray-500">Invited</span>
        </div>
        <p className="text-gray-500 mt-2">Time to send the invitations!</p>
      </div>
      <Link to="/guests" className="text-rose-500 hover:underline mt-4 text-sm font-semibold text-right block">
        Manage Guests &rarr;
      </Link>
    </div>
  );
}