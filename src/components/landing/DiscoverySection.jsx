// src/components/landing/DiscoverySection.jsx
import React, { useState, useEffect } from 'react';
import weddingImg1 from '../../assets/images/wedding4.png';
import weddingImg2 from '../../assets/images/wedding5.png';
import weddingImg3 from '../../assets/images/wedding6.png';

const images = [weddingImg1, weddingImg2, weddingImg3];

const DiscoverySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      {/* Light overlay instead of dark */}
      <div className="absolute inset-0 bg-white/30 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl">
        {/* Decorative elements in red */}
        <div className="absolute top-10 left-10 opacity-10 z-0">
          <DecorativePattern className="w-24 h-24 text-red-600" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 z-0">
          <DecorativePattern className="w-24 h-24 text-red-600" />
        </div>

        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-gray-800">
          Discover the Essence of{' '}
          <span className="text-red-600 relative">
            Ethiopian Weddings
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>
          </span>
        </h2>

       <p className="text-xl md:text-2xl font-semibold mb-10 mx-auto max-w-2xl text-gray-700">
  Experience the beauty of tradition with modern planning tools designed specifically for Ethiopian wedding celebrations.
  {/* Search Bar */}
<div className="relative z-20 flex flex-col items-center space-y-5 mb-10">
  {/* Main Search Row */}
  <div className="w-full max-w-3xl bg-white rounded-xl shadow-md flex flex-col sm:flex-row items-center overflow-hidden border border-gray-200">
    {/* Business Type Dropdown */}
    <select
      className="w-full sm:w-1/3 px-3 py-2 text-sm border-b sm:border-b-0 sm:border-r border-gray-200 text-gray-600 focus:outline-none"
      defaultValue=""
    >
      <option value="" disabled>Business Type</option>
      <option value="photography">Photography</option>
      <option value="cakes">Cakes</option>
      <option value="dress">Dress</option>
      <option value="music">Music</option>
    </select>

    {/* Location Dropdown */}
    <select
      className="w-full sm:w-1/3 px-3 py-2 text-sm border-b sm:border-b-0 sm:border-r border-gray-200 text-gray-600 focus:outline-none"
      defaultValue=""
    >
      <option value="" disabled>Location</option>
      <option value="addis">Addis Ababa</option>
      <option value="gondar">Gondar</option>
      <option value="bahirdar">Bahir Dar</option>
      <option value="hawassa">Hawassa</option>
    </select>

    {/* Search Button */}
    <button className="w-full sm:w-1/3 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 transition-colors">
      Search
    </button>
  </div>

  {/* Quick Categories */}
  <div className="flex flex-wrap justify-center gap-2">
    <button className="flex items-center px-4 py-1.5 text-sm bg-gray-800 text-white rounded-full shadow hover:bg-red-500 transition">
      📷 Photography
    </button>
    <button className="flex items-center px-4 py-1.5 text-sm bg-gray-800 text-white rounded-full shadow hover:bg-red-500 transition">
      🎂 Cakes
    </button>
    <button className="flex items-center px-4 py-1.5 text-sm bg-gray-800 text-white rounded-full shadow hover:bg-red-500 transition">
      👗 Dress
    </button>
    <button className="flex items-center px-4 py-1.5 text-sm bg-gray-800 text-white rounded-full shadow hover:bg-red-500 transition">
      🎵 Music
    </button>
  </div>
</div>

</p>
        {/* Indicator dots in red */}
        <div className="flex justify-center space-x-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-red-600 scale-125' : 'bg-red-300'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Decorative pattern component in red
const DecorativePattern = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100">
    <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default DiscoverySection;
