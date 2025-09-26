import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <section
      className="w-full h-auto md:h-[80vh] flex justify-center items-center bg-gray-50 py-16 px-5 md:px-20"
      id="contact"
    >
      <div className=" grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col  gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-gray-600">
            Need help or have questions about our products? Our support team is
            here for you!
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-blue-500" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-blue-500" />
              <span>support@buynext.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>123 Market Street, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-all"
            required
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
