import React from "react";
import { motion } from "framer-motion";
const AboutUs = ({ mode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`w-full flex justify-center items-center flex-col space-y-5  h-[600px] px-[5%] ${
        mode === "light" ? "bg-white" : "bg-gray-900 text-white"
      } `}
    >
      <h1 className="text-[20px] md:text-2xl font-bold">About us</h1>
      <p className="text-center">
        At BuyNext, we believe shopping should be simple, enjoyable, and
        inspiring. Our mission is to bring you high-quality products at
        affordable prices while ensuring a smooth and hassle-free online
        shopping experience.
      </p>
      <p className="text-center">
        We carefully select every item to match your lifestyle—whether it’s
        fashion, tech, or everyday essentials. With fast delivery, secure
        checkout, and reliable customer support, we’re here to make sure you
        shop with confidence.
      </p>
      <p className="text-center">
        At BuyNext, it’s not just about buying products—it’s about elevating
        your everyday life.
      </p>
    </motion.div>
  );
};

export default AboutUs;
