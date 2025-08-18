// src/components/home/FeaturedVendors.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// --- ASSET IMPORTS ---
// In a real application, this data would come from your backend API.
import vendorImg1 from '../../assets/images/vendors/photographer1.jpg';
import vendorImg2 from '../../assets/images/vendors/venue1.jpg';
import vendorImg3 from '../../assets/images/vendors/florist1.jpg';
import vendorImg4 from '../../assets/images/vendors/caterer1.jpg';

const vendors = [
  { id: 1, name: 'Eleonor Captures', category: 'Photography', image: vendorImg1 },
  { id: 2, name: 'The Grand Hall', category: 'Venue', image: vendorImg2 },
  { id: 3, name: 'Bloom & Petal', category: 'Florist', image: vendorImg3 },
  { id: 4, name: 'Gourmet Creations', category: 'Catering', image: vendorImg4 },
];

const VendorCard = ({ vendor }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={vendor.image} alt={vendor.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4">
      <span className="mb-1 inline-block rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">{vendor.category}</span>
      <h3 className="text-lg font-bold text-white">{vendor.name}</h3>
    </div>
  </div>
);

export default function FeaturedVendors() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Top Vendors</h2>
          <p className="text-lg text-gray-600 mt-2">Find the perfect professionals to make your day unforgettable.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vendors.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/vendors"
            className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-rose-600 transform hover:scale-105 transition-all duration-300"
          >
            Explore All Vendors
          </Link>
        </div>
      </div>
    </section>
  );
}