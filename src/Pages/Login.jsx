// src/pages/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // --- SMART SIMULATION ---
    // Creates a user object based on the email content for easy testing.
    let userType;
    let name;
    if (email.toLowerCase().includes('couple')) {
        userType = 'Couple';
        name = 'Alex';
    } else if (email.toLowerCase().includes('vendor')) {
        userType = 'Vendor';
        name = 'Pro Vendor';
    } else {
        userType = 'Relative';
        name = 'Aunt Mary';
    }
    
    const user = {
      name: name,
      email: email,
      type: userType,
      hasCompletedOnboarding: false,
      profile: null,
      event: null
    };
    // --- END SIMULATION ---
    
    // Save the user object to localStorage
    localStorage.setItem('weddingPlannerUser', JSON.stringify(user));
    
    // --- FIX: Centralize navigation logic ---
    // Always navigate to the root. The Home.jsx component will
    // then read localStorage and redirect to the correct dashboard.
    navigate('/');
    // ----------------------------------------
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 relative">
      <div className="absolute inset-0 bg-[url('/flowers.svg')] bg-cover bg-center opacity-10"></div>
      <div className="relative bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-rose-200">
        <h2 className="text-3xl font-serif text-rose-500 text-center mb-6">
          💍 Wedding Planner
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-300"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., couple@test.com"
            />
            <p className="text-xs text-gray-500 mt-1">Hint: Use 'couple', 'vendor', or 'relative' in the email to test.</p>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-pink-300"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            Sign In
          </button>
          <p className="text-center mt-4 text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-pink-500 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}