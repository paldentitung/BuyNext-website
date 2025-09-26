import React from "react";
import Card from "./Card";
import { productsData } from "../data/ProductsData";
import { Link } from "react-router-dom";
import { useState } from "react";
const ProductListing = ({ showAll = false }) => {
  console.log(productsData);
  const [searchTerm, setSearchTerm] = useState("");
  const searchItem = productsData.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showData = showAll ? searchItem : searchItem.slice(0, 12);

  return (
    <>
      <div className=" p-[5%] bg-white flex flex-col space-y-5">
        <div className="w-full  flex justify-center items-center">
          {showAll && (
            <input
              type="search"
              placeholder="search products..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border w-3/4 outline-0 border-gray-400 p-3 rounded-md  transition-all duration-200 hover:shadow-md focus:shadow-sm "
            />
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
                <Card key={index} product={product} />
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
