// src/components/guest/GuestWelcome.jsx
import React from 'react';

export default function GuestWelcome({ coupleNames, eventName }) {
  return (
    <div className="text-center bg-white p-8 rounded-lg shadow-md border-t-4 border-rose-400">
      <p className="text-lg text-gray-600">You are invited to celebrate the wedding of</p>
      <h1 className="text-5xl font-serif text-gray-800 my-4">{coupleNames}</h1>
      <h2 className="text-2xl font-semibold text-rose-500">{eventName}</h2>
    </div>
  );
}