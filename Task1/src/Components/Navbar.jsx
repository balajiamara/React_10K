import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
      <h1 className="text-3xl font-bold text-pink-600">
        Freee<span className="text-lime-500">ze</span>
      </h1>
      <ul className="flex gap-8 text-gray-600">
        <li className="text-pink-500 font-semibold cursor-pointer">HOME</li>
        <li className="cursor-pointer hover:text-pink-500">ABOUT</li>
        <li className="cursor-pointer hover:text-pink-500">BLOG</li>
        <li className="cursor-pointer hover:text-pink-500">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
