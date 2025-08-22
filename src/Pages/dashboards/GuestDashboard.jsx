// src/Pages/dashboards/GuestDashboard.jsx

import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar.jsx';

// --- IMPORTING OUR NEW, FOCUSED COMPONENTS ---
import GuestWelcome from '../../components/guest/GuestWelcome.jsx';
import GuestEventInfo from '../../components/guest/GuestEventInfo.jsx';
import GuestRsvp from '../../components/guest/GuestRsvp.jsx';

export default function GuestDashboard() {
  const navigate = useNavigate();
  const [guestData, setGuestData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This simulation provides all the necessary data for our new components.
    const fetchGuestData = () => {
      const user = JSON.parse(localStorage.getItem('weddingPlannerUser'));
      if (!user) {
        navigate('/login');
        return;
      }

      const simulatedGuestData = {
        user: user,
        event: {
          coupleNames: 'Alex & Jordan',
          eventName: "A Celebration of Love",
          date: 'Saturday, June 12, 2026',
          time: '5:00 PM onwards',
          venue: 'The Grand Hall',
          address: '123 Vineyard Lane, Napa Valley, CA',
          rsvpStatus: 'Pending', // Change to 'Accepted' to test the "Thank You" message
        }
      };
      
      setGuestData(simulatedGuestData);
      setIsLoading(false);
    };

    setTimeout(fetchGuestData, 500);
  }, [navigate]);

  if (isLoading || !guestData) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center" style={{minHeight: '80vh'}}>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-rose-500"></div>
        </div>
      </div>
    );
  }

  const { user, event } = guestData;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar user={user} />

      <main className="p-4 md:p-8">
        {/* A beautiful, single-column layout like a digital invitation */}
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
        
          <GuestWelcome coupleNames={event.coupleNames} eventName={event.eventName} />
          
          <GuestEventInfo 
            date={event.date}
            time={event.time}
            venue={event.venue}
            address={event.address}
          />
          
          <GuestRsvp status={event.rsvpStatus} />

        </div>
      </main>
    </div>
  );
}