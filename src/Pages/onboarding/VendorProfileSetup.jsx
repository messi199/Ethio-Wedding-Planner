// src/Pages/onboarding/VendorProfileSetup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar'; // Assuming vendors see a navbar

// --- DATA FROM YOUR SCHEMA ---
// The 'service_category' is an enum, so we'll make it a dropdown.
const serviceCategories = [
  "Photography", "Videography", "Catering", "Venue", "Makeup", 
  "Dressing", "Decor", "Transportation", "Music/DJ", "Other"
];

const pricingRanges = [
  "$ (Budget-Friendly)", "$$ (Average)", "$$$ (Premium)", "$$$$ (Luxury)"
];
// ----------------------------

export default function VendorProfileSetup() {
  const navigate = useNavigate();
  const [vendorData, setVendorData] = useState({
    business_name: '',
    service_category: serviceCategories[0], // Default to the first option
    pricing_range: pricingRanges[0],
    years_of_experience: '',
    business_reg_number: '' // Optional field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Get the current user from localStorage.
    const storedUserJSON = localStorage.getItem('weddingPlannerUser');
    const currentUser = storedUserJSON ? JSON.parse(storedUserJSON) : {};

    // 2. Create the final, correctly structured user object.
    const updatedUser = {
      ...currentUser, // Keep existing info like name, email, type
      hasCompletedOnboarding: true, // Set the flag to true

      // *** We create a nested 'vendorProfile' object ***
      // This keeps the data organized, just like the 'event' object for couples.
      vendorProfile: vendorData
    };

    // 3. Save the updated user object back to localStorage.
    localStorage.setItem('weddingPlannerUser', JSON.stringify(updatedUser));

    // 4. Redirect to the now-functional dashboard.
    navigate('/'); // Navigate to Home, which will redirect to the vendor dashboard
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Create Your Business Profile</h1>
          <p className="text-center text-gray-600 mt-2 mb-8">This information will be visible to couples looking for vendors.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="business_name" className="block text-sm font-medium text-gray-700">Business Name</label>
              <input type="text" name="business_name" id="business_name" required value={vendorData.business_name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
            </div>

            <div>
              <label htmlFor="service_category" className="block text-sm font-medium text-gray-700">Service Category</label>
              <select name="service_category" id="service_category" required value={vendorData.service_category} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500">
                {serviceCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            
            <div>
              <label htmlFor="pricing_range" className="block text-sm font-medium text-gray-700">Pricing Range</label>
              <select name="pricing_range" id="pricing_range" required value={vendorData.pricing_range} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500">
                {pricingRanges.map(range => <option key={range} value={range}>{range}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="years_of_experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
              <input type="number" name="years_of_experience" id="years_of_experience" required min="0" value={vendorData.years_of_experience} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500" />
            </div>

            <div className="pt-5">
              <button type="submit" className="w-full bg-rose-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-rose-600 transition-colors">
                Save and Publish Profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}