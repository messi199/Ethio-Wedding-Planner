// src/components/landing/VendorListSection.jsx

import React from 'react';

// Step 1: Import ALL the images you need from the src/assets folder
import venueImage from '../../assets/images/venue.png';
import cateringImage from '../../assets/images/catering.png';
import photographyImage from '../../assets/images/photography.png'; // <-- ADD THIS
import flowerImage from '../../assets/images/flower.png';           // <-- AND THIS

// The updated array with all images correctly referenced
const vendors = [
  {
    name: 'Photographers',
    description: 'Capture your special moments.',
    // Step 2: Use the imported variable
    imageUrl: photographyImage
  },
  {
    name: 'Venues',
    description: 'Find the perfect setting.',
    imageUrl: venueImage
  },
  {
    name: 'Caterers',
    description: 'Delight your guests with delicious food.',
    imageUrl: cateringImage
  },
  {
    name: 'Florists',
    description: 'Beautiful arrangements for your big day.',
    // Use the imported variable and add the missing curly brace
    imageUrl: flowerImage
  } // <-- THIS BRACE WAS MISSING
];

const VendorListSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Find Top-Rated Local Vendors
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We've curated a list of the best professionals to make your wedding day perfect.
          Explore categories to find the right fit for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map((vendor) => (
            <div
              key={vendor.name}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${vendor.imageUrl})` }}
                ></div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{vendor.name}</h3>
                <p className="text-gray-600">{vendor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorListSection;