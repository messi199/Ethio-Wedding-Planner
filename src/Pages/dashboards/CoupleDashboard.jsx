// src/Pages/dashboards/CoupleDashboard.jsx

import React, { useState, useEffect } from 'react';
// FIX 1: Imported 'useNavigate' hook instead of the 'Navigate' component.
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar.jsx';

// FIX 2: Corrected the folder path from 'Components' to 'components' (lowercase 'c').
import Countdown from '../../components/Countdown.jsx';
import BudgetSummary from '../../components/BudgetSummary.jsx';
import GuestSummary from '../../components/GuestSummary.jsx';
import ChecklistSummary from '../../components/ChecklistSummary.jsx';

export default function CoupleDashboard() {
  const navigate = useNavigate();

  // We will use state to hold our dashboard data
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // --- BACKEND API INTEGRATION POINT ---
    // LATER, YOU WILL DELETE THIS SIMULATION and UNCOMMENT THE REAL API CALL.
    
    // --- START: FAKE DASHBOARD DATA SIMULATION ---
    const fetchFakeData = () => {
      const userJSON = localStorage.getItem('weddingPlannerUser');
      if (!userJSON) {
        navigate('/login');
        return;
      }
      
      const user = JSON.parse(userJSON);

      const simulatedDashboardData = {
        user: {
          name: user.name,
          hasCompletedOnboarding: false, // Set to 'false' to test the "empty state"
        },
        event: {
          name: `${user.name}'s Wedding`,
          event_date: "2026-06-12T17:00:00",
          budget: 25000,
          guest_count: 150,
        }
      };
      
      setDashboardData(simulatedDashboardData);
      setIsLoading(false);
    };

    setTimeout(fetchFakeData, 500);
    // --- END: FAKE DASHBOARD DATA SIMULATION ---

  }, [navigate]);


  // --- RENDER STATES ---
  if (isLoading || !dashboardData) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center" style={{minHeight: '80vh'}}>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-rose-500"></div>
        </div>
      </div>
    );
  }

  const { user, event } = dashboardData;
  const hasProfile = user.hasCompletedOnboarding;

  // FIX 3: Added back the UI for the "empty state" to guide new users.
  if (!hasProfile) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar user={JSON.parse(localStorage.getItem('weddingPlannerUser'))} />
        <div className="flex flex-col items-center justify-center text-center p-4" style={{minHeight: '80vh'}}>
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome, {user.name || 'future Newlyweds'}!
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            You're just one step away from organizing the wedding of your dreams. Let's start by creating your wedding profile.
          </p>
          <div className="mt-8">
            <Link
              to="/setup-wedding" // This links to your WeddingSetupWizard component
              className="bg-rose-500 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              Let's Get Started
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // --- POPULATED DASHBOARD ---
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Pass the user object to the Navbar so it can display the user's name */}
      <Navbar user={JSON.parse(localStorage.getItem('weddingPlannerUser'))} />

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
            <Countdown date={event.event_date} />
            <BudgetSummary budget={event.budget} />
            <GuestSummary count={event.guest_count} />
            <ChecklistSummary />
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Your Next Steps</h2>
            <p className="text-gray-600">This is where you'll see upcoming tasks. For now, let's start by finding the perfect venue!</p>
          </div>
        </div>
      </main>
    </div>
  );
}