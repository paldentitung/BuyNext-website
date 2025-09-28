import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

export const Footer = () => {
  // Convert text to URL-friendly slug
  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      <div className="h-auto md:h-[60vh] bg-white ">
        <div className="flex flex-col md:flex-row space-y-5 w-full p-[10%] justify-between">
          {/* Left Section */}
          <div className="flex gap-4 flex-col">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold italic text-lg md:text-xl">
                BN
              </div>
              <span className="text-2xl md:text-3xl text-blue-500 font-bold">
                BuyNext
              </span>
            </Link>
            <div className="flex gap-5">
              <FaFacebook className="text-2xl text-gray-800 hover:text-blue-600 transition-colors duration-300 hover:scale-110 hover:cursor-pointer" />
              <FaInstagram className="text-2xl text-gray-800 hover:scale-110 hover:cursor-pointer hover:text-pink-500 transition-colors duration-300" />
              <FaLinkedin className="text-2xl text-gray-800 hover:scale-110 hover:cursor-pointer hover:text-blue-700 transition-colors duration-300" />
              <FaXTwitter className="text-2xl text-gray-800 hover:scale-110 hover:cursor-pointer hover:text-black dark:hover:text-black transition-colors duration-300" />
              <FaWhatsapp className="text-2xl text-gray-800 hover:scale-110 hover:cursor-pointer hover:text-green-600 transition-colors duration-300" />
            </div>
            <div>&copy;2025 Hirely. All rights reserved</div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solutions */}
            <div className="flex flex-col space-y-3 justify-center md:items-center">
              <span className="font-semibold">Solutions</span>
              <ul className="flex flex-col space-y-3 justify-center items-start md:items-center">
                {[
                  "Marketing",
                  "Analytics",
                  "Automation",
                  "Commerce",
                  "Insights",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500"
                  >
                    <Link to={`/${toSlug(item)}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-3 md:items-center">
              <span className="font-semibold">Company</span>
              <ul className="flex flex-col space-y-3 justify-center md:items-center">
                {["About", "Blog", "Contact", "Press"].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500"
                  >
                    <Link to={`/${toSlug(item)}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col space-y-3 md:items-center">
              <span className="font-semibold">Support</span>
              <ul className="flex flex-col space-y-3 justify-center md:items-center">
                {["Submit ticket", "Documentation", "Guides"].map((item) => (
                  <li
                    key={item}
                    className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500"
                  >
                    <Link to={`/${toSlug(item)}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-3 md:items-center">
              <span className="font-semibold">Legal</span>
              <ul className="flex flex-col space-y-3 justify-center md:items-center">
                {["Terms of Service", "Privacy Policy", "License"].map(
                  (item) => (
                    <li
                      key={item}
                      className="text-gray-500 transition-all duration-300 hover:cursor-pointer border-b border-transparent hover:border-gray-500"
                    >
                      <Link to={`/${toSlug(item)}`}>{item}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
