import React from "react";

import HeroSection from "./Components/HeroSection";
import WhatWeOffer from "./Components/WhatWeOffer";
import ExploreCategories from "./Components/ExploreCategories";

function App() {
  return (
    <div className=" bg-gradient-to-b from-pink-50 via-white to-blue-50 text-center ">
      {/* <Header /> */}
      <HeroSection />
      <WhatWeOffer />
      <ExploreCategories />
      
    </div>
  );
}

export default App;
