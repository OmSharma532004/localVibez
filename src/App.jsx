import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from "./Components/HeroSection";
import WhatWeOffer from "./Components/WhatWeOffer";
import ExploreCategories from "./Components/ExploreCategories";
import Description from "./Components/Description";
import AppDownloadSection from "./Components/AppDownload";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TAndC from "./Pages/T&C"; // Adjust the import path as necessary
import FaqPage from "./Pages/Faq";
import CommunityGuidelinesPage from "./Pages/CommunityGuidlines";
import AdvertisingPolicyPage from "./Pages/AdvertisingPolicy";
import CookiePolicyPage from "./Pages/Cookie";
import VerificationPolicyPage from "./Pages/VerificationPolicy";

function HomePage() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-blue-50 text-center">
      <HeroSection />
      <Description />
      <WhatWeOffer />
      <ExploreCategories />
      <AppDownloadSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/tnc" element={<TAndC/>} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/community-guidelines" element={<CommunityGuidelinesPage />} />
        <Route path="/advertising-policy" element={<AdvertisingPolicyPage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/verification-policy" element={<VerificationPolicyPage />} />
        <Route path="*" element={<div className="text-center mt-20">Page Not Found</div>} />

        {/* Add more routes if needed */}
      </Routes>

  );
}

export default App;
