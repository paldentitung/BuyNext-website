import React from "react";
import hero_image from "../assets/hero.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="h-screen md:h-[60vh] relative">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-shadow">
          Elevate Your Everyday Style
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-200">
          Our hoodies are designed to blend comfort, durability, and
          street-ready style—so you can look good and feel great no matter where
          life takes you.
        </p>
        <Link to="/products">
          <button className="mt-6 px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
