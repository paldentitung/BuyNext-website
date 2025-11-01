import React from "react";
import ceo_image from "../assets/ceo.jpg";
import marketing_lead from "../assets/marketing-lead.jpg";
import productManager from "../assets/techguy.jpg";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { ModeToggleContext } from "../context/ModeToggleContext";
const AboutUsPage = () => {
  const { mode } = useContext(ModeToggleContext);

  return (
    <>
      <div
        className={`w-full min-h-screen py-16 px-5 md:px-20 ${
          mode === "light" ? "bg-gray-50 text-black" : "bg-gray-900 text-white"
        }`}
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold text-blue-500">About BuyNext</h1>
          <p className=" text-lg">
            At BuyNext, we believe shopping should be simple, enjoyable, and
            inspiring. Our mission is to provide high-quality products at great
            prices while delivering excellent customer service. We strive to
            make your online shopping experience smooth, secure, and fun.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer">
              <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
              <p className="">
                Deliver high-quality products with a seamless shopping
                experience.
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer">
              <h3 className="font-semibold text-xl mb-2">Our Vision</h3>
              <p className="">
                Be the go-to e-commerce platform for customers worldwide.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer">
              <h3 className="font-semibold text-xl mb-2">Our Values</h3>
              <p className="">
                Customer first, quality products, integrity, and innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold  mb-8">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src={ceo_image}
                  alt="Founder"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-xl">Palden D.</h3>
              <p className=" text-sm">Founder & CEO</p>
            </div>
            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src={marketing_lead}
                  alt="Marketing Lead"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-xl">Team Member</h3>
              <p className=" text-sm">Marketing Lead</p>
            </div>
            <div className=" p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                <img
                  src={productManager}
                  alt="Product Manager"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="font-semibold text-xl">Team Member</h3>
              <p className=" text-sm">Product Manager</p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to shop with us?</h2>
          <a
            href="/products"
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Explore Products
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
