// src/Pages/LandingPage.jsx

import React from 'react';
import LandingNavbar from '../components/layout/LandingNavbar.jsx';
import DiscoverySection from '../components/landing/DiscoverySection.jsx';
import VendorListSection from '../components/landing/VendorListSection.jsx';
import HowItWorksSection from '../components/landing/HowItWorksSection.jsx';
import Footer from '../components/layout/Footer.jsx';

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <main>
        <DiscoverySection />
        <VendorListSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;