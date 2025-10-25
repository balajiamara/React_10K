import React from "react";
import { IceCream, HandHeart, Droplet, MapPin } from "lucide-react";

const features = [
  { icon: <IceCream size={32} />, title: "PRODUCTS" },
  { icon: <HandHeart size={32} />, title: "OUR STORY" },
  { icon: <Droplet size={32} />, title: "FLAVORS" },
  { icon: <MapPin size={32} />, title: "OUR LOCATION" },
];

const FeatureSection = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 text-center bg-lime-500 text-white py-10">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          {f.icon}
          <p className="font-semibold">{f.title}</p>
        </div>
      ))}
    </section>
  );
};

export default FeatureSection;
