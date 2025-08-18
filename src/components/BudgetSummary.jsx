// src/components/BudgetSummary.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function BudgetSummary({ budget }) {
  // Format the budget number into a currency string (e.g., 20000 -> $20,000.00)
  const formattedBudget = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(budget || 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Total Budget</h3>
        <p className="text-4xl font-bold text-gray-900">{formattedBudget}</p>
        <p className="text-gray-500 mt-2">Let's start tracking your expenses.</p>
      </div>
      <Link to="/budget" className="text-rose-500 hover:underline mt-4 text-sm font-semibold text-right block">
        Manage Budget &rarr;
      </Link>
    </div>
  );
}