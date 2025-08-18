// src/Pages/Register.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'Couple' // Default to 'Couple' to prevent errors
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // --- FIX: Create and save the new user object ---
    const newUser = {
      name: formData.name,
      email: formData.email,
      type: formData.accountType, // Use the type from the form
      hasCompletedOnboarding: false,
      profile: null,
      event: null
    };

    localStorage.setItem('weddingPlannerUser', JSON.stringify(newUser));
    // ------------------------------------------------

    // --- FIX: Navigate to the Home page to be redirected ---
    // This logs the user in immediately after registration.
    navigate('/'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 relative">
      <div className="absolute inset-0 bg-[url('/flowers.svg')] bg-cover bg-center opacity-10"></div>
      <div className="relative bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-yellow-200">
        <h2 className="text-3xl font-serif text-rose-500 text-center mb-6">
          💍 Create Account
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-600">Name</label>
            <input type="text" name="name" required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-300" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-600">Email</label>
            <input type="email" name="email" required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-300" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-600">Password</label>
            <input type="password" name="password" required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-300" value={formData.password} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-600">Confirm Password</label>
            <input type="password" name="confirmPassword" required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-300" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium text-gray-600">Account Type</label>
            <select name="accountType" required className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-300" value={formData.accountType} onChange={handleChange}>
              <option value="Couple">Couple</option>
              <option value="Vendor">Vendor</option>
              <option value="Relative">Relative</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-pink-400 to-yellow-300 text-white py-3 rounded-lg shadow hover:scale-105 transition">
            Register
          </button>
          <p className="text-center mt-4 text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}