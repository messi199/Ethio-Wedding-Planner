// src/components/landing/LocationSection.jsx
import React from 'react';

const LocationSection = () => {
  // Ethiopian cities with wedding venues
  const cities = [
    {
      name: 'Addis Ababa',
      description: 'The capital city with diverse wedding venues',
      image: 'https://images.unsplash.com/photo-1591533987527-30c76c8b15d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      vendorCount: '120+ Vendors'
    },
    {
      name: 'Bahir Dar',
      description: 'Lakeside weddings with stunning views',
      image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      vendorCount: '85+ Vendors'
    },
    {
      name: 'Hawassa',
      description: 'Beautiful lakeside wedding destinations',
      image: 'https://images.unsplash.com/photo-1548588627-980aac1cb4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      vendorCount: '65+ Vendors'
    },
    {
      name: 'Gondar',
      description: 'Historic venues with royal heritage',
      image: 'https://images.unsplash.com/photo-1510798836521-e4c4c1b0b55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      vendorCount: '70+ Vendors'
    },
    {
      name: 'Dire Dawa',
      description: 'Unique cultural wedding experiences',
      image: 'https://images.unsplash.com/photo-1512716679859-da19b4af9c38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      vendorCount: '55+ Vendors'
    },
    {
      name: 'Mekele',
      description: 'Emerging wedding destination with unique venues',
      image: 'https://images.unsplash.com/photo-1574879988118-5a9b46cf5e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      vendorCount: '45+ Vendors'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-red-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Popular <span className="text-red-600">Locations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse by location to find wedding companies in your area and view their work. 
            Discover the perfect venues and vendors across Ethiopia's most beautiful cities.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* City Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Vendor Count Badge */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {city.vendorCount}
                </div>
                
                {/* City Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                  <p className="text-red-100 mb-3">{city.description}</p>
                  <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white transform hover:translate-x-2">
                    Explore Venues
                    <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Can't find your city?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly expanding our network of wedding vendors across Ethiopia. 
              Let us know your location, and we'll help you find the perfect vendors for your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="text" 
                placeholder="Enter your city..." 
                className="px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 transform hover:-translate-y-1 shadow-md">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;