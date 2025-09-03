// src/components/landing/VendorListSection.jsx

import React, { useState } from 'react';

// Import only the images that actually exist in your project
import venueImage from '../../assets/images/venue.png';
import cateringImage from '../../assets/images/catering.png';
import photographyImage from '../../assets/images/photography.png';
import flowerImage from '../../assets/images/flower.png';

// The main vendors array with only existing images
const vendors = [
  {
    name: 'Photographers',
    description: 'Capture your special moments.',
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
    imageUrl: flowerImage
  }
];

// Additional vendors - using placeholder divs instead of missing images
const additionalVendors = [
  {
    name: 'Makeup Artists',
    description: 'Look your best on your special day.',
    hasImage: false,
    colorClass: 'bg-pink-100'
  },
  {
    name: 'Entertainment',
    description: 'Music and entertainment for your celebration.',
    hasImage: false,
    colorClass: 'bg-purple-100'
  },
  {
    name: 'Bridal Wear',
    description: 'Stunning dresses and attire.',
    hasImage: false,
    colorClass: 'bg-blue-100'
  },
  {
    name: 'Cake Designers',
    description: 'Sweet creations for your celebration.',
    hasImage: false,
    colorClass: 'bg-yellow-100'
  }
];

const VendorListSection = () => {
  const [showAllVendors, setShowAllVendors] = useState(false);

  const toggleShowAllVendors = () => {
    setShowAllVendors(!showAllVendors);
  };

  const displayedVendors = showAllVendors ? [...vendors, ...additionalVendors] : vendors;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {displayedVendors.map((vendor, index) => (
            <div
              key={`${vendor.name}-${index}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-48">
                {vendor.imageUrl ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${vendor.imageUrl})` }}
                  ></div>
                ) : (
                  <div className={`absolute inset-0 flex items-center justify-center ${vendor.colorClass || 'bg-gray-200'}`}>
                    <div className="text-center p-4">
                      <svg className="w-12 h-12 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="text-sm text-gray-600 mt-2">Image coming soon</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{vendor.name}</h3>
                <p className="text-gray-600">{vendor.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More Categories Button */}
        <div className="text-center">
          <button
            onClick={toggleShowAllVendors}
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 transform hover:-translate-y-1 shadow-md"
          >
            {showAllVendors ? 'Show Less Categories' : 'More Categories'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VendorListSection;