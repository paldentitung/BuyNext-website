import React from "react";
import ceo_image from "../assets/ceo.jpg";
import marketing_lead from "../assets/marketing-lead.jpg";
import productManager from "../assets/techguy.jpg";
import { Footer } from "../Components/Footer";
import { useContext } from "react";
import { ModeToggleContext } from "../context/ModeToggleContext";
import { easeInOut, motion } from "framer-motion";
const AboutUsPage = () => {
  const { mode } = useContext(ModeToggleContext);

  const teamMembers = [
    {
      id: 1,
      name: "Palden D.",
      role: "Founder & CEO",
      image: ceo_image,
    },
    {
      id: 2,
      name: "Team Member",
      role: "Marketing Lead",
      image: marketing_lead,
    },
    {
      id: 3,
      name: "Team Member",
      role: "Product Manager",
      image: productManager,
    },
  ];

  const aboutHighlights = [
    {
      id: 1,
      title: "Our Mission",
      text: "Deliver high-quality products with a seamless shopping experience.",
    },
    {
      id: 2,
      title: "Our Vision",
      text: "Be the go-to e-commerce platform for customers worldwide.",
    },
    {
      id: 3,
      title: "Our Values",
      text: "Customer first, quality products, integrity, and innovation.",
    },
  ];

  return (
    <>
      <div
        className={`w-full min-h-screen py-16 px-5 md:px-20 ${
          mode === "light" ? "bg-gray-50 text-black" : "bg-gray-900 text-white"
        }`}
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold text-blue-500">About BuyNext</h1>
            <p className=" text-lg">
              At BuyNext, we believe shopping should be simple, enjoyable, and
              inspiring. Our mission is to provide high-quality products at
              great prices while delivering excellent customer service. We
              strive to make your online shopping experience smooth, secure, and
              fun.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {aboutHighlights.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className=" p-6 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
                >
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold  mb-8">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                className=" p-6 rounded-lg shadow-md hover:shadow-lg transition"
                key={member.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt="Founder"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className=" text-sm">{member.role}</p>
              </motion.div>
            ))}
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
