import React from "react";
import yogurtImg from "../assets/yogurt.png"; // place your image in /src/assets

const HeroSection = () => {
  return (
    <section className="relative bg-white text-center py-12">
      <img src={yogurtImg} alt="Yogurt" className="mx-auto" />
      <button className="absolute bottom-8 right-16 bg-pink-600 text-white px-6 py-3 rounded-full font-bold">
        FREEZE DELIGHT
      </button>
    </section>
  );
};

export default HeroSection;
