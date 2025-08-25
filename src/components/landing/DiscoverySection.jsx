// src/components/landing/DiscoverySection.jsx

import React, { useState, useEffect } from 'react';

// Step 1: Import all the images you want to cycle through.
import weddingImg1 from '../../assets/images/wedding4.png';
import weddingImg2 from '../../assets/images/wedding5.png';
import weddingImg3 from '../../assets/images/wedding6.png';

// Step 2: Put the imported images into an array for easy access.
const images = [weddingImg1, weddingImg2, weddingImg3];

const DiscoverySection = () => {
  // Step 3: Create a state to keep track of the current image's index.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Step 4: Use an effect to set up a timer that changes the index.
  useEffect(() => {
    // Set an interval to run a function every 5 seconds (5000 milliseconds).
    const intervalId = setInterval(() => {
      // Update the index, looping back to 0 when it reaches the end.
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // You can change 5000 to 3000 for 3 seconds, etc.

    // This is a cleanup function that stops the timer when the component is removed.
    return () => clearInterval(intervalId);
  }, []); // The empty array [] means this effect runs only once when the component mounts.

  return (
    // The main container must be relative to position the images inside it.
    <section className="relative h-[60vh] md:h-[70vh] text-white overflow-hidden">
      {/* Step 5: Render all images, but only show the active one. */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            // The magic happens here: the current image is visible (opacity 1), the others are hidden (opacity 0).
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Dark Overlay - sits on top of the images. */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container - sits on top of the overlay. */}
      <div className="relative container mx-auto px-6 text-center h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4 md:text-6xl">
          Plan Your Perfect Wedding, Stress-Free
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          From checklists and budgets to vendors and guest lists, we have all the tools you need to bring your dream wedding to life.
        </p>
        <a href="/register" className="bg-pink-500 font-bold rounded-full py-3 px-8 hover:bg-pink-600 transition duration-300">
          Get Started for Free
        </a>
      </div>
    </section>
  );
};

export default DiscoverySection;