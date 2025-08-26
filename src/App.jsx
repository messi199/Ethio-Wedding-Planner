// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// --- PAGE IMPORTS ---
// NEW: Import the LandingPage we created
import LandingPage from "./Pages/LandingPage.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import { AuthProvider } from "./contexts/AuthContext";
// --- ONBOARDING IMPORTS ---
import WeddingSetupWizard from "./Pages/onboarding/WeddingSetupWizard.jsx";
import VendorProfileSetup from "./Pages/onboarding/VendorProfileSetup.jsx";

// --- DASHBOARD IMPORTS ---
import CoupleDashboard from "./Pages/dashboards/CoupleDashboard.jsx";
import VendorDashboard from "./Pages/dashboards/VendorDashboard.jsx";
import GuestDashboard from "./Pages/dashboards/GuestDashboard.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard/couple" element={<CoupleDashboard />} />
        <Route path="/dashboard/vendor" element={<VendorDashboard />} />
        <Route path="/dashboard/guest" element={<GuestDashboard />} />

        <Route path="/setup-wedding" element={<WeddingSetupWizard />} />
        <Route path="/setup-vendor" element={<VendorProfileSetup />} />
      </Routes>
    </AuthProvider>
  );
}
