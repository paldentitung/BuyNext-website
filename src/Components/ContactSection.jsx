import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const ContactSection = ({ mode }) => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <section
      className={`w-full h-auto md:h-[80vh] flex justify-center items-center py-16 px-5 md:px-20 ${
        mode === "light" ? "bg-white" : "bg-gray-900 text-white"
      }`}
      id="contact"
    >
      <div className=" grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,

            ease: "easeOut",
          }}
          className="flex flex-col  gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p>
            Need help or have questions about our products? Our support team is
            here for you!
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 ">
              <FaPhone className="text-blue-500" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-3 ">
              <FaEnvelope className="text-blue-500" />
              <span>support@buynext.com</span>
            </div>
            <div className="flex items-center gap-3 ">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>123 Market Street, Kathmandu, Nepal</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,

            ease: "easeOut",
          }}
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
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
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
