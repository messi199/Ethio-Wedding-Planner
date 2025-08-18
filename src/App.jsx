// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- PAGE IMPORTS ---
// FIX 1: Removed the duplicate 'Home' import and the typo.
import Home from './Pages/Home.jsx'; 
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';

// --- ONBOARDING IMPORTS ---
import WeddingSetupWizard from './Pages/onboarding/WeddingSetupWizard.jsx';
import VendorProfileSetup from './Pages/onboarding/VendorProfileSetup.jsx';

// --- DASHBOARD IMPORTS ---
import CoupleDashboard from './Pages/dashboards/CoupleDashboard.jsx';
import VendorDashboard from './Pages/dashboards/VendorDashboard.jsx';
import GuestDashboard from './Pages/dashboards/GuestDashboard.jsx';

export default function App() {
  return ( 
    <Routes>
      {/* --- CORE & AUTH ROUTES --- */}
      {/* FIX 2: Correctly render the 'Home' component on the root path. */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* FIX 3: Removed the redundant '/home' route. */}

      {/* --- DASHBOARD ROUTES --- */}
      <Route path="/dashboard/couple" element={<CoupleDashboard />} />
      <Route path="/dashboard/vendor" element={<VendorDashboard />} />
      {/* FIX 4: Added the leading slash '/' to the guest dashboard path. */}
      <Route path="/dashboard/guest" element={<GuestDashboard />} />
      
      {/* --- ONBOARDING / SETUP ROUTES --- */}
      <Route path="/setup-wedding" element={<WeddingSetupWizard />} />
      <Route path="/setup-vendor" element={<VendorProfileSetup />} /> 
    </Routes>
  );
}