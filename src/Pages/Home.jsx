import React from "react";
import Hero from "../Components/Hero";
import ProductListing from "../Components/ProductListing";
import AboutUs from "../Components/AboutUs";
const Home = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <div>
        <Hero />
        <ProductListing showAll={false} />
      </div>
      <AboutUs />
    </div>
  );
};

export default Home;
