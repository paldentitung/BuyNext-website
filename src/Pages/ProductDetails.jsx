import React, { use } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../data/ProductsData";
import rating50 from "../assets/ratings/rating-50.png";
import rating45 from "../assets/ratings/rating-45.png";
import rating40 from "../assets/ratings/rating-40.png";
import { useState, useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CartContext } from "../context/CardContext";
import ToastMessage from "../Components/ToastMessage";
const ProductDetails = () => {
  const { id } = useParams();
  const selectedProduct = productsData.find((product) => product.id === id);
  const { image, name, rating, priceCents, description, variations, category } =
    selectedProduct;

  const ratingImages = {
    4.0: rating40,
    4.5: rating45,
    5.0: rating50,
  };
  const [selectedVarations, setSelectedVarations] = useState(null);
  const currentImage = selectedVarations ? selectedVarations.image : image;
  const currentName = selectedVarations ? selectedVarations.name : name;
  const handleVariationChange = (variation) => {
    setSelectedVarations(variation);
    console.log(selectedVarations);
  };
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);
  return (
    <div className=" min-h-screen w-full  bg-white">
      <button
        className="text-blue-500 flex items-center gap-1  px-[5%] pt-7 hover:cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Go back
      </button>
      <div className="w-full h-full p-2 md:p-[5%] flex flex-col md:flex-row justify-between gap-10 ">
        {/* image container */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          {/* Main Product Image */}

          <img
            src={currentImage}
            alt={currentName}
            className="h-[400px]
             w-[400px] object-contain "
          />

          {/* Variations */}
          {variations && variations.length > 0 && (
            <div className="flex gap-4 flex-wrap justify-center mt-4">
              <button
                onClick={() => handleVariationChange(null)}
                className={`w-20 h-20 rounded-md shadow-md ring-2 ring-blue-500`}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-md"
                />
              </button>
              {variations.map((v, index) => (
                <button
                  key={index}
                  onClick={() => handleVariationChange(v)}
                  className={`w-20 h-20 rounded-md shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 ${
                    selectedVarations?.id === v.id ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* product  details container */}

        <div className="md:w-3/4 md:h-3/4 p-3 flex flex-col space-y-5 md:mt-10">
          <h1 className="text-[20px] md:text-2xl lg:text-3xl font-bold">
            {currentName}
          </h1>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              <img src={ratingImages[rating.stars]} alt="" className="w-16" />
              <span>{rating.count}</span>
            </div>
            <div className="bg-green-400 rounded-2xl px-3 py-1 text-white">
              {category}
            </div>
          </div>
          {/* description */}
          <div>{description}</div>
          <div className="flex  items-center justify-between">
            <div className="font-semibold">
              ${priceCents / (100).toFixed(1)}
            </div>
            <div className="flex gap-4 items-center">
              <button
                className="px-3 py-1 bg-gray-200 rounded-md text-[20px] transition-all duration-200
              hover:cursor-pointer hover:opacity-80
              "
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </button>
              <span className=" text-[20px] p-2">{quantity}</span>
              <button
                className="px-3 py-1 bg-gray-200 rounded-md text-[20px] transition-all duration-200
              hover:cursor-pointer hover:opacity-80
              "
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                addToCart(
                  { id, name: currentName, image: currentImage, priceCents },
                  quantity
                );

                // Show the toast
                setShowToast(true);

                // Hide toast after 2 seconds
                setTimeout(() => setShowToast(false), 2000);
              }}
              className=" block bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition hover:cursor-pointer"
            >
              add to cart
            </button>
            <ToastMessage showToast={showToast}>Added To Cart!</ToastMessage>;
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
