// src/Pages/LandingPage.jsx

import React from 'react';
import LandingNavbar from '../components/layout/LandingNavbar.jsx';
import DiscoverySection from '../components/landing/DiscoverySection.jsx';
import LetsStartSection from '../components/landing/LetsStartSection'; 
import VendorListSection from '../components/landing/VendorListSection.jsx';
import LocationSection from '../components/landing/LocationSection.jsx';
import HowItWorksSection from '../components/landing/HowItWorksSection.jsx';
import WhyChooseUsSection from '../components/landing/WhyChooseUsSection.jsx';
import Footer from '../components/layout/Footer.jsx';

const LandingPage = () => {
  return (
    <div>
      <LandingNavbar />
      <main>
        <DiscoverySection />
        <LetsStartSection />
        <VendorListSection />
        <LocationSection />
        <HowItWorksSection />
        <WhyChooseUsSection/>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;