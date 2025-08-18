// src/Pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

// --- ASSET IMPORTS ---
import logo from '../assets/logo.png';
import weddingImage1 from '../assets/images/wedding1.png';
import weddingImage2 from '../assets/images/wedding2.png';
import weddingImage3 from '../assets/images/wedding3.png';

const heroImages = [weddingImage1, weddingImage2, weddingImage3];

// --- Helper Components (can be moved to their own files later) ---
const LoadingScreen = () => (
    <div className="h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-rose-500"></div>
    </div>
);

const ErrorScreen = ({ message }) => (
    <div className="h-screen w-full flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h2>
        <p className="text-gray-700">{message}</p>
        <Link to="/login" className="mt-4 text-rose-500 hover:underline">Please try logging in again.</Link>
    </div>
);

// --- MAIN HOME COMPONENT ---
export default function Home() {
  const navigate = useNavigate();
  // --- STATE FOR USER DATA, LOADING, AND ERRORS ---
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- DATA FETCHING LOGIC ---
  useEffect(() => {
    const fetchCurrentUser = () => {
      try {
        // Get user data from localStorage (as used in Login.jsx)
        const storedUserJSON = localStorage.getItem('weddingPlannerUser');
        if (!storedUserJSON) {
          // If no one is logged in, send to login page
          navigate('/login');
          return;
        }

        const userData = JSON.parse(storedUserJSON);
        // Map the user type to accountType for consistency
        const userWithAccountType = {
          ...userData,
          accountType: userData.type.toLowerCase()
        };
        setUser(userWithAccountType);
      } catch (err) {
        setError('Could not authenticate user. Please log in.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentUser();
  }, [navigate]); // Empty array ensures this runs only once on mount

  // --- IMAGE SLIDER LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- RENDER STATES ---
  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen message={error} />;
  }

  // --- MAIN RENDER AFTER DATA IS LOADED ---
  // Determine the link for the dashboard based on the user's account type
  const dashboardLink = `/dashboard/${user.accountType}`; // e.g., /dashboard/couple or /dashboard/guest

  return (
    <div className="bg-white">
      {/* Pass the user object to the Navbar to show the correct menu */}
      <Navbar logo={logo} isTransparent={true} user={user} />

      {/* --- HERO SECTION --- */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4 animate-fade-in">
          {/* PERSONALIZED WELCOME MESSAGE */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 shadow-text">
            Welcome, {user.name}!
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 shadow-text">
            We're so excited to help you on this journey. Let's get started.
          </p>
          {/* UPDATED CALL-TO-ACTION BUTTON */}
          <Link
            to={dashboardLink} // Links dynamically to the correct dashboard
            className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-rose-600 transform hover:scale-105 transition-all duration-300"
          >
            Go to Your Dashboard
          </Link>
        </div>
      </div>

      {/* --- Other sections like Features and Footer can remain the same --- */}
      {/* ... (Features Section) ... */}
      {/* ... (Footer Section) ... */}
    </div>
  );
}