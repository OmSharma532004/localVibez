import React from "react";

import HeroSection from "./Components/HeroSection";
import WhatWeOffer from "./Components/WhatWeOffer";
import ExploreCategories from "./Components/ExploreCategories";
import Description from "./Components/Description";
import AppDownloadSection from "./Components/AppDownload";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className=" bg-gradient-to-b from-pink-50 via-white to-blue-50 text-center ">
      {/* <Header /> */}
      <HeroSection />
      <Description/>
      <WhatWeOffer />
      <ExploreCategories />
      <AppDownloadSection/>
      <Footer/>
      
    </div>
  );
}

export default App;
