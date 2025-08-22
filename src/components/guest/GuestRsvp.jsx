// src/components/guest/GuestRsvp.jsx
import React, { useState } from 'react';

export default function GuestRsvp({ status }) {
  const [rsvpStatus, setRsvpStatus] = useState(status);

  if (rsvpStatus !== 'Pending') {
    return (
      <div className="bg-green-50 text-green-800 p-8 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-semibold">Thank You!</h3>
        <p className="text-lg mt-2">Your RSVP has been recorded as: <strong>{rsvpStatus}</strong></p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Kindly Respond</h3>
      <div className="flex justify-center space-x-4">
        <button onClick={() => setRsvpStatus('Accepted')} className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-all">
          Will Attend
        </button>
        <button onClick={() => setRsvpStatus('Declined')} className="bg-gray-400 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-500 transition-all">
          Unable to Attend
        </button>
      </div>
    </div>
  );
}