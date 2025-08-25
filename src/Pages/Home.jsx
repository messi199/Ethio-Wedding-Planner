// src/Pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

import logo from "../assets/logo.png";
import weddingImage1 from "../assets/images/wedding1.png";
import weddingImage2 from "../assets/images/wedding2.png";
import weddingImage3 from "../assets/images/wedding3.png";

import WhatWeOffer from "../components/home/WhatWeOffer";
import WeddingHub from "../components/home/WeddingHub";
import GuestHub from "../components/home/GuestHub"; // new guest-specific component
import FeaturedVendors from "../components/home/FeaturedVendors";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/layout/Footer";

const heroImages = [weddingImage1, weddingImage2, weddingImage3];

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    try {
      const storedUserJSON = localStorage.getItem("weddingPlannerUser");
      if (!storedUserJSON) {
        navigate("/login");
        return;
      }
      const userData = JSON.parse(storedUserJSON);
      const userWithAccountType = {
        ...userData,
        accountType: userData.type.toLowerCase(),
      };
      setUser(userWithAccountType);
    } catch (err) {
      console.error("Failed to load user", err);
      setError("Failed to load your session.");
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return null;

  return (
    <div className="bg-white font-sans">
      <Navbar logo={logo} isTransparent={true} user={user} />

      {/* HERO */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center transition-all duration-1000"
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/70 via-rose-700/50 to-black/40"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-rose-200 via-pink-300 to-rose-400 bg-clip-text text-transparent drop-shadow-xl">
            Craft Your Unforgettable Story
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-rose-100 drop-shadow-lg">
            Your journey to "I do" should be as beautiful as the day itself.
            We’re here to make it happen.
          </p>
          <Link
            to="/vendors"
            className="mt-8 inline-block px-8 py-3 bg-rose-500 text-white font-semibold rounded-full shadow-lg hover:bg-rose-600 hover:scale-105 transition-transform duration-300"
          >
            Explore Vendors
          </Link>
        </div>
      </div>

      {/* SECTIONS */}
      <section className="py-16 bg-pink-50">
        <WhatWeOffer />
      </section>

      {user.accountType === "couple" && (
        <section className="py-16 bg-gradient-to-b from-white to-pink-50">
          <WeddingHub />
        </section>
      )}

      {user.accountType === "guest" && (
        <section className="py-16 bg-gradient-to-b from-white to-pink-50">
          <GuestHub />
        </section>
      )}

      <section className="py-16 bg-white">
        <FeaturedVendors />
      </section>

      <section className="py-16 bg-pink-50">
        <AboutSection />
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <ContactSection />
      </section>
      <Footer logo={logo} />
    </div>
  );
}
