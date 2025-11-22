import React from "react";
import Card from "./Card";
import { productsData } from "../data/ProductsData";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ModeToggleContext } from "../context/ModeToggleContext";
import { motion } from "framer-motion";
const ProductListing = ({ showAll = false }) => {
  console.log(productsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterItem, setFilterItem] = useState(null);

  const matchedItems = productsData.filter((product) => {
    const searchItem =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase);

    const filterTerm = filterItem
      ? product.category.toLowerCase() === filterItem.toLowerCase()
      : true;
    return searchItem && filterTerm;
  });
  const showData = showAll ? matchedItems : matchedItems.slice(0, 12);
  const { mode } = useContext(ModeToggleContext);

  return (
    <>
      <div
        className={` p-[5%]  flex flex-col space-y-5 min-h-screen ${
          mode === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >
        <div className="w-full  flex justify-center gap-1 flex-col items-center">
          {showAll && (
            <div className="w-full flex flex-col mx-auto max-w-6xl items-center justify-center space-y-6">
              <input
                type="search"
                placeholder="search products..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border w-full outline-0  p-3 rounded-md  transition-all duration-200 hover:shadow-md focus:shadow-sm "
              />
              <div className={`flex self-end items-center space-x-1 `}>
                <label htmlFor="filter">Select:</label>
                <select
                  className={` p-2 outline-0 border  rounded-md cursor-pointer focus:cursor-pointer hover:cursor-pointer ${
                    mode === "light"
                      ? "bg-gray-50 text-black"
                      : "bg-gray-900 text-white"
                  }`}
                  onChange={(e) => setFilterItem(e.target.value)}
                >
                  <option value="">All Product</option>

                  <option value="clothing">Clothing</option>
                  <option value="sports">Sports</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="home">Home</option>
                  <option value="footwear">Footwear</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Household">Household</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Furniture">Furniture</option>
                  <option value="fitness">Fitness</option>
                  <option value="office">Office</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="text-[20px] md:text-2xl font-bold">Products</h1>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {showData.length === 0 ? (
            <p className="text-center text-[20px] text-red-400">
              Product Not Found
            </p>
          ) : (
            <>
              {showData.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: index * 0.01, // stagger effect
                  }}
                >
                  <Card product={product} mode={mode} />
                </motion.div>
              ))}
            </>
          )}
        </div>
        {!showAll && (
          <Link
            to="/products"
            className=" block w-[150px] mx-auto  mt-[40px]   bg-blue-500  px-10 py-3 text-white  rounded-md transition-all duration-200  hover:opacity-80 active:opacity-50"
          >
            Show All
          </Link>
        )}
      </div>
    </>
  );
};

export default ProductListing;
