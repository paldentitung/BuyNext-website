import React from "react";
import Card from "./Card";
import { productsData } from "../data/ProductsData";
import { Link } from "react-router-dom";
const ProductListing = ({ showAll = false }) => {
  console.log(productsData);
  const showData = showAll ? productsData : productsData.slice(0, 10);
  return (
    <>
      <div className=" p-[5%]">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {showData.map((product, index) => (
            <Card key={index} product={product} />
          ))}
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
