// src/components/ChecklistSummary.jsx

import React from 'react';
import { Link } from 'react-router-dom';

// In the future, you'll pass 'tasks' as a prop and calculate this dynamically.
// For now, we'll use placeholder values.
const ChecklistSummary = () => {
  const completedTasks = 5;
  const totalTasks = 25;
  const percentage = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Checklist Progress</h3>
        <p className="text-gray-500 mb-4">{completedTasks} of {totalTasks} tasks completed</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div 
            className="bg-rose-500 h-2.5 rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-right text-sm font-semibold text-gray-600">{percentage}% Complete</p>
      </div>
      <Link to="/checklist" className="text-rose-500 hover:underline mt-4 text-sm font-semibold text-right block">
        View Checklist &rarr;
      </Link>
    </div>
  );
};

export default ChecklistSummary;