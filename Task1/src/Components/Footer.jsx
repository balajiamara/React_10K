import React from "react";
import { Facebook, Twitter, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white text-center py-8">
      <div className="flex justify-center gap-6 mb-4">
        <Facebook className="cursor-pointer" />
        <Twitter className="cursor-pointer" />
        <Instagram className="cursor-pointer" />
        <Globe className="cursor-pointer" />
      </div>
      <p className="text-sm">© 2023 Freeeze. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
