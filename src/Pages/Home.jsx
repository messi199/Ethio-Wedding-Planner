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
import WhatWeOffer from '../components/home/WhatWeOffer';
import WeddingHub from '../components/home/WeddingHub';
import FeaturedVendors from '../components/home/FeaturedVendors';
import AboutSection from '../components/home/AboutSection';
import ContactSection from '../components/home/ContactSection';

const heroImages = [weddingImage1, weddingImage2, weddingImage3];

// --- Helper Components ---
// FIX: Replaced the placeholder comments with the actual component code.
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

  // --- DATA FETCHING & SLIDER LOGIC ---
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
        console.error('Failed to load user', err);
        setError('Failed to load your session.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCurrentUser();
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- RENDER STATES ---
  if (isLoading) { return <LoadingScreen />; }
  if (error) { return <ErrorScreen message={error} />; }
  if (!user) { return null; }
  
  // --- THE DECORATED & ANIMATED RETURN BLOCK ---
  return (
    <div className="bg-white">
      <Navbar logo={logo} isTransparent={true} user={user} />

      {/* --- ENHANCED HERO SECTION --- */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center transition-all duration-1000"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 animate-fade-in-up shadow-text">
            Craft Your Unforgettable Story
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Your journey to "I do" should be as beautiful as the day itself. We're here to make it happen.
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce">
           <svg className="w-8 h-8 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      {/* --- NEW DECORATED & ANIMATED SECTIONS --- */}
      <WhatWeOffer />
      <WeddingHub />
      
      {/* --- YOUR ORIGINAL SECTIONS --- */}
      <div className="animate-fade-in-up"><FeaturedVendors /></div>
      <div className="animate-fade-in-up"><AboutSection /></div>
      <div className="animate-fade-in-up"><ContactSection /></div>
      
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