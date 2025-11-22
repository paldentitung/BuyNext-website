import React from "react";
import rating50 from "../assets/ratings/rating-50.png";
import rating45 from "../assets/ratings/rating-45.png";
import rating40 from "../assets/ratings/rating-40.png";
import { Link } from "react-router-dom";
const Card = ({ product, mode }) => {
  const { id, image, name, rating, priceCents } = product;
  const ratingImages = {
    4.0: rating40,
    4.5: rating45,
    5.0: rating50,
  };
  return (
    <>
      <div
        className={`rounded-md  h-auto lg:h-[400px]  flex justify-center items-center flex-col gap-5 shadow-md p-1  ${
          mode === "light"
            ? "shadow-[rgb(230,230,230)]"
            : " shadow-[rgba(0,0,0,0.3)]"
        } `}
      >
        <div className="h-1/2">
          <img src={image} alt="" className="h-48 p-2  object-contain   " />
        </div>
        <div className=" h-1/2 flex  flex-col  px-6 w-full">
          <h2 className="text-[20px]">{name}</h2>
          <div className="flex justify-between items-center  mt-auto mb-auto">
            <img src={ratingImages[rating.stars]} alt="" className="w-16" />

            <span>{rating.count}</span>
          </div>

          <div className="flex justify-between items-center flex-col lg:flex-row mt-auto mb-auto">
            <span className="block font-semibold">
              ${(priceCents / 100).toFixed(2)}
            </span>
            <Link to={`/product/${id}`}>
              {" "}
              <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition hover:cursor-pointer">
                view Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
