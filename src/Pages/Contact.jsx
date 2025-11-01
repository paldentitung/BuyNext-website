import React from "react";
import ContactSection from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { ModeToggleContext } from "../context/ModeToggleContext";

const Contact = () => {
  const { mode } = useContext(ModeToggleContext);
  return (
    <>
      <div
        className={`w-full min-h-screen  py-16 px-5 md:px-20 ${
          mode === "light" ? "bg-white" : "bg-gray-900 text-white"
        }`}
      >
        {/* Page Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
            Contact Us
          </h1>
          <p className=" max-w-2xl">
            Have questions about your order, products, or returns? Our support
            team is here to help you promptly and efficiently.
          </p>
        </div>

        {/* Contact Info & Form */}
        <ContactSection />

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6 ">
            Our Location
          </h2>
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:brightness-110">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.317136150305!2d85.28493323753113!3d27.708954252271894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1758910146398!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
