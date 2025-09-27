import React from "react";
import { CartContext } from "../context/CardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import rating50 from "../assets/ratings/rating-50.png";
import rating45 from "../assets/ratings/rating-45.png";
import rating40 from "../assets/ratings/rating-40.png";
const ratingImages = {
  4.0: rating40,
  4.5: rating45,
  5.0: rating50,
};
const CartStep = ({ onNextStep }) => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-6 max-w-6xl mx-auto bg-white">
      {cart.length === 0 ? (
        <>
          <div className="flex justify-center items-center w-full flex-col gap-4">
            <p className="text-gray-700 text-lg font-medium">Nothing in cart</p>
            <Link
              to="/products"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition hover:cursor-pointer"
            >
              View Products
            </Link>
          </div>
        </>
      ) : (
        <>
          {" "}
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center gap-6 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                {/* Product Image */}
                <div className="w-40 h-40 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-2">
                  <h1 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h1>
                  <img
                    src={ratingImages[product.rating.stars]}
                    alt="rating"
                    className="h-5"
                  />
                </div>

                {/* Price + Quantity */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="text-lg font-bold text-gray-700">
                    ${(product.priceCents / 100).toFixed(2)}
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => addToCart(product, -1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Cart Summary */}
          <div className="w-full md:w-1/3 h-fit p-6 border rounded-lg shadow-md bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cart Summary
            </h2>
            {(() => {
              const subtotal = cart.reduce(
                (total, product) =>
                  total + product.priceCents * product.quantity,
                0
              );
              const taxRate = 0.1; // 10% tax
              const tax = subtotal * taxRate;
              const total = subtotal + tax;

              return (
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${(subtotal / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (10%)</span>
                    <span>${(tax / 100).toFixed(2)}</span>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between font-bold text-lg text-gray-900">
                    <span>Total</span>
                    <span>${(total / 100).toFixed(2)}</span>
                  </div>
                </div>
              );
            })()}
            <button
              onClick={onNextStep}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartStep;
