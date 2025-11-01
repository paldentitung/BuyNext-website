import React from "react";
import Hero from "../Components/Hero";
import ProductListing from "../Components/ProductListing";
import AboutUs from "../Components/AboutUs";
import ContactSection from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { ModeToggleContext } from "../context/ModeToggleContext";
const Home = () => {
  const { mode } = useContext(ModeToggleContext);
  return (
    <div className="flex flex-col gap-[100px]">
      <div>
        <Hero />
        <ProductListing showAll={false} />
      </div>
      <AboutUs mode={mode} />
      <div>
        {" "}
        <ContactSection mode={mode} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
