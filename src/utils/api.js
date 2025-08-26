// src/utils/api.js
const API_BASE = "http://127.0.0.1:8000/api";

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem("weddingPlannerToken");

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  if (token) {
    defaultHeaders["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
};

// Example usage in components:
// import { apiRequest } from '../utils/api';
//
// const fetchVendors = async () => {
//   try {
//     const vendors = await apiRequest('/vendors');
//     setVendors(vendors);
//   } catch (error) {
//     console.error('Failed to fetch vendors', error);
//   }
// };
