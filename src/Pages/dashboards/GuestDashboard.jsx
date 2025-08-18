// src/Pages/GuestDashboard.jsx

import React from 'react';
import Navbar from '../../components/layout/Navbar'; // Assuming a generic navbar for all users

// --- Dummy Data Simulation ---
// In a real app, this data would come from the user's invitation details.
const eventDetails = {
  coupleNames: "Alex & Chris",
  eventDate: "Saturday, October 26, 2025",
  location: "The Grand Ballroom, Downtown",
  message: "We're so excited to celebrate our special day with you. Please find the details below and let us know if you can make it!"
};
// ----------------------------

export default function GuestDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 text-center animate-fade-in">
          
          <h2 className="text-2xl font-serif text-gray-500">You're invited to the wedding of</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-rose-500 mt-2">
            {eventDetails.coupleNames}
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 mt-6 text-lg">
            {eventDetails.message}
          </p>

          <div className="mt-8 border-t border-b border-gray-200 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm font-semibold text-gray-500 uppercase">Date</span>
              <p className="text-xl font-bold text-gray-800 mt-1">{eventDetails.eventDate}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm font-semibold text-gray-500 uppercase">Location</span>
              <p className="text-xl font-bold text-gray-800 mt-1">{eventDetails.location}</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Will you be joining us?</h3>
            <div className="flex justify-center space-x-4">
              <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition-transform hover:scale-105">
                Accept with Joy
              </button>
              <button className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-red-600 transition-transform hover:scale-105">
                Regretfully Decline
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}