// src/Pages/VendorDashboard.jsx

import React from 'react';
import Navbar from '../../components/layout/Navbar';

// --- Dummy Data Simulation ---
const vendorData = {
  businessName: "Evergreen Photography",
  newBookings: 3,
  unreadMessages: 5,
  profileCompletion: 80, // As a percentage
};
// ----------------------------

export default function VendorDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Welcome, {vendorData.businessName}!
          </h1>
        </div>
      </header>

      <main className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-700">New Booking Requests</h3>
              <p className="text-4xl font-bold text-blue-500 mt-2">{vendorData.newBookings}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-700">Unread Messages</h3>
              <p className="text-4xl font-bold text-green-500 mt-2">{vendorData.unreadMessages}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium text-gray-700">Profile Status</h3>
              <p className="text-4xl font-bold text-rose-500 mt-2">Live & Visible</p>
            </div>
          </div>

          {/* Action Center */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Manage Your Business</h3>
              <div className="space-y-4">
                <button className="w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-rose-100 transition">Edit Your Profile</button>
                <button className="w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-rose-100 transition">Manage Your Portfolio</button>
                <button className="w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-rose-100 transition">Update Service Packages</button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Profile Completion</h3>
              <p className="text-gray-600 mb-2">Complete your profile to attract more couples!</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-rose-500 h-4 rounded-full" style={{ width: `${vendorData.profileCompletion}%` }}></div>
              </div>
              <p className="text-right font-bold mt-2">{vendorData.profileCompletion}% Complete</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}