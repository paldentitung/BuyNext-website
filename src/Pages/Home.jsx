import React from "react";
import Hero from "../Components/Hero";
import ProductListing from "../Components/ProductListing";
import AboutUs from "../Components/AboutUs";
import ContactSection from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
const Home = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <div>
        <Hero />
        <ProductListing showAll={false} />
      </div>
      <AboutUs />
      <div>
        {" "}
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
