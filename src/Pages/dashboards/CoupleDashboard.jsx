// src/Pages/CoupleDashboard.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar.jsx';

// --- IMPORT YOUR SUMMARY COMPONENTS ---
import Countdown from '../../Components/Countdown.jsx';
import BudgetSummary from '../../Components/BudgetSummary.jsx';
import GuestSummary from '../../Components/GuestSummary.jsx';
import ChecklistSummary from '../../Components/ChecklistSummary.jsx';

// --- IMPORT HELPER COMPONENTS ---
// It's good practice to have dedicated components for loading and error states
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-rose-500"></div>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="text-center p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Something Went Wrong</h2>
    <p>{message}</p>
    <Link to="/login" className="text-rose-600 hover:underline mt-4 inline-block font-semibold">
      Please try logging in again.
    </Link>
  </div>
);


export default function CoupleDashboard() {
  // --- STATE MANAGEMENT ---
  // We now use state to handle our data, loading status, and potential errors.
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- DATA FETCHING ---
  // This effect runs once when the component mounts to fetch data from the backend.
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // --- BACKEND API CALL ---
        // Replace '/api/couple/dashboard' with the actual endpoint from your backend team.
        // This endpoint should be protected and return data for the logged-in user.
        const response = await fetch('/api/couple/dashboard'); 
        
        if (!response.ok) {
          // Handle HTTP errors like 404 Not Found or 500 Internal Server Error
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        setDashboardData(data); // Store the fetched data in state

      } catch (err) {
        // Handle network errors or errors from the try block
        setError(err.message || 'Failed to fetch dashboard data.');
      } finally {
        // This runs regardless of success or failure
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []); // The empty array ensures this effect runs only once on component mount.

  // --- 1. LOADING STATE ---
  // Display a spinner or placeholder while fetching data.
  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center" style={{minHeight: '80vh'}}>
            <LoadingSpinner />
        </div>
      </div>
    );
  }

  // --- 2. ERROR STATE ---
  // Inform the user if something went wrong during the fetch.
  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <ErrorDisplay message={error} />
            </div>
        </main>
      </div>
    );
  }
  
  // --- 3. DATA LOADED STATE ---
  // Now we can safely use the dashboardData object.
  const { user, event } = dashboardData;
  const hasProfile = user.hasCompletedOnboarding || false;

  // --- "EMPTY STATE" - For users who haven't finished the setup wizard ---
  if (!hasProfile) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center p-4" style={{minHeight: '80vh'}}>
          <h1 className="text-4xl font-bold text-gray-800 animate-fade-in">
            Welcome, {user.name || 'future Newlyweds'}!
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto animate-fade-in">
            You're just one step away from organizing the wedding of your dreams. Let's start by creating your wedding profile.
          </p>
          <div className="mt-8">
            <Link
              to="/setup-wedding"
              className="bg-rose-500 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              Let's Get Started
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // --- "POPULATED STATE" - The full dashboard for returning users ---
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {event.name || `Welcome back, ${user.name}!`}
          </h1>
        </div>
      </header>

      <main className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pass the data from the event object as props */}
            <Countdown date={event.event_date} />
            <BudgetSummary budget={event.budget} />
            <GuestSummary count={event.guest_count} />
            <ChecklistSummary />
            
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Your Next Steps</h2>
            <p className="text-gray-600">This is where you'll see upcoming tasks from your checklist or recent messages from vendors. Let's start by finding the perfect venue!</p>
          </div>
        </div>
      </main>
    </div>
  );
}