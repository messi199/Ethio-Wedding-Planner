// src/Pages/Home.jsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

// --- ASSET IMPORTS ---
import logo from '../assets/logo.png';
import weddingImage1 from '../assets/images/wedding1.png';
import weddingImage2 from '../assets/images/wedding2.png';
import weddingImage3 from '../assets/images/wedding3.png';

// --- SECTION COMPONENT IMPORTS ---
import FeaturedVendors from '../components/home/FeaturedVendors';
import AboutSection from '../components/home/AboutSection.jsx';
import ContactSection from '../components/home/ContactSection';

const heroImages = [weddingImage1, weddingImage2, weddingImage3];

// --- Helper Components ---
const LoadingScreen = () => (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-rose-500"></div>
    </div>
);

const ErrorScreen = ({ message }) => (
    <div className="h-screen w-full flex flex-col items-center justify-center p-4 text-center bg-gray-50">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h2>
        <p className="text-gray-700">{message}</p>
        <Link to="/login" className="mt-4 text-rose-500 hover:underline">Please try logging in again.</Link>
    </div>
);

// --- MAIN HOME COMPONENT ---
export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- DATA FETCHING LOGIC ---
  useEffect(() => {
    const fetchCurrentUser = () => {
      try {
        const storedUserJSON = localStorage.getItem('weddingPlannerUser');
        if (!storedUserJSON) {
          navigate('/login');
          return;
        }
        const userData = JSON.parse(storedUserJSON);
        const userWithAccountType = {
          ...userData,
          accountType: userData.type.toLowerCase()
        };
        setUser(userWithAccountType);
      } catch (err) {
        setError('Could not process user session. Please try logging in again.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentUser();
  }, [navigate]);

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
  
  // --- IMPROVEMENT: Add a final guard clause for robustness ---
  // This ensures the component never tries to render if the user object is missing.
  if (!user) {
    return null; // Or return another loading/error screen
  }

  // Determine the link for the dashboard based on the user's account type
  const dashboardLink = `/dashboard/${user.accountType}`;

  return (
    <div className="bg-white">
      <Navbar logo={logo} isTransparent={true} user={user} />

      {/* --- HERO SECTION --- */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 shadow-text">
            Welcome, {user.name}!
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 shadow-text">
            We're so excited to help you on this journey. Let's get started.
          </p>
          {/* <Link
            to={dashboardLink}
            className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-rose-600 transform hover:scale-105 transition-all duration-300"
          >
            Go to Your Dashboard
          </Link> */}
        </div>
      </div>

      {/* --- INTEGRATION: Add the new homepage sections --- */}
      <FeaturedVendors />
      <AboutSection />
      <ContactSection />
      
      {/* --- FOOTER SECTION --- */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your Wedding Planner, Inc. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}