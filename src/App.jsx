// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- PAGE IMPORTS ---
// NEW: Import the LandingPage we created
import LandingPage from './Pages/LandingPage.jsx'; 
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
      
      {/* UPDATED: The root path now shows your new landing page for visitors. */}
      <Route path="/" element={<LandingPage />} />
      
      {/* UPDATED: The original 'Home' page is now at '/home'. You'll go here after login. */}
      <Route path="/home" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* --- DASHBOARD ROUTES --- */}
      <Route path="/dashboard/couple" element={<CoupleDashboard />} />
      <Route path="/dashboard/vendor" element={<VendorDashboard />} />
      <Route path="/dashboard/guest" element={<GuestDashboard />} />
      
      {/* --- ONBOARDING / SETUP ROUTES --- */}
      <Route path="/setup-wedding" element={<WeddingSetupWizard />} />
      <Route path="/setup-vendor" element={<VendorProfileSetup />} /> 
    </Routes>
  );
}