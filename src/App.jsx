import React from "react";
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
const App = () => {
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
