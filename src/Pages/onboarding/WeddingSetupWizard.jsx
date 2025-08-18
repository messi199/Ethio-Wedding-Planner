// src/Pages/onboarding/WeddingSetupWizard.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Assuming you have these step components. You might need to adjust them
// to pass data up correctly if they are not already doing so.
import WelcomeStep from './WelcomeStep';
import PartnerStep from './PartnerStep';
import DetailsStep from './DetailsStep';

const WeddingSetupWizard = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  
  // This state will hold all the data collected from the steps
  const [wizardData, setWizardData] = useState({
    partnerName: '',
    event_date: '', // Using `event_date` to match the dashboard
    budget: '',
    guest_count: ''  // Using `guest_count` to match the dashboard
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  // --- THIS IS THE CRITICAL FIX ---
  const handleSubmit = () => {
    // 1. Get the current user from localStorage.
    const storedUserJSON = localStorage.getItem('weddingPlannerUser');
    const currentUser = storedUserJSON ? JSON.parse(storedUserJSON) : {};

    // 2. Create the final, correctly structured user object.
    const updatedUser = {
      ...currentUser, // Keep existing info like name, email, type
      hasCompletedOnboarding: true, // Set the flag to true

      // *** THE KEY CHANGE IS HERE ***
      // We create a nested 'event' object to match what the dashboard expects.
      event: {
        id: Date.now(), // Simulate a unique ID for the event
        name: `${currentUser.name}'s Wedding`, // Create a default event name
        event_date: wizardData.event_date,
        budget: wizardData.budget,
        guest_count: wizardData.guest_count
        // You can add other fields from your wizardData here
      }
    };

    // 3. Save the updated user object back to localStorage.
    localStorage.setItem('weddingPlannerUser', JSON.stringify(updatedUser));

    // 4. Redirect to the now-functional dashboard.
    navigate('/'); // Navigate to Home, which will redirect to the couple dashboard
  };

  // This function renders the correct step of the wizard
  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeStep onNext={handleNext} />;
      case 2:
        return <PartnerStep data={wizardData} setData={setWizardData} onNext={handleNext} onBack={handleBack} />;
      case 3:
        // DetailsStep is the final step, so its submit button triggers handleSubmit
        return <DetailsStep data={wizardData} setData={setWizardData} onSubmit={handleSubmit} onBack={handleBack} />;
      default:
        return <WelcomeStep onNext={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl p-6 md:p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        {renderStep()}
      </div>
    </div>
  );
};

export default WeddingSetupWizard;