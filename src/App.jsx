import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import AboutUsPage from "./Pages/AboutUsPage";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import ThankYouPage from "./Components/ThankYouPage";
import ScrollToTop from "./Components/ScrollToTop";
import PlaceHolderPage from "./Components/PlaceHolderPage";
import { ModeToggleContext } from "./context/ModeToggleContext";
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const { mode } = useContext(ModeToggleContext);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div
        className={`min-h-screen flex justify-center items-center flex-col ${
          mode === "light" ? "bg-white" : "bg-gray-900 text-white"
        }`}
      >
        <div className="flex items-center gap-1">
          {" "}
          <span className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold italic text-lg md:text-xl">
            BN
          </span>
          <span className="text-2xl md:text-3xl text-blue-500 font-bold">
            BuyNext
          </span>
        </div>
        <div className="w-[50px] h-[50px] border-blue-500 border-2  rounded-[50%] border-t-transparent  animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/:page" element={<PlaceHolderPage />} />
      </Routes>
    </>
  );
};

export default App;
