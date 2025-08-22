// src/components/layout/SearchBox.jsx

import React from 'react';

export default function SearchBox() {
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, you would handle the search logic here
    const query = e.target.elements.search.value;
    alert(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="search"
        name="search"
        placeholder="Search vendors..."
        className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full bg-gray-100 border-transparent focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-300"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
    </form>
  );
}