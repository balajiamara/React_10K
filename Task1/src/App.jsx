import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroBanner";
import ProductSection from "./Components/Production";
import FeatureSection from "./Components/Feature";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <FeatureSection />
      <Footer />
    </>
  );
};

export default App;
