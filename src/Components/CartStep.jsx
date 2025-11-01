import React from "react";
import { CartContext } from "../context/CardContext";
import { ModeToggleContext } from "../context/ModeToggleContext";
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
  const { mode } = useContext(ModeToggleContext);

  return (
    <div
      className={`min-h-screen ${
        mode === "light" ? "bg-white" : "bg-gray-900 text-white"
      } `}
    >
      <div
        className={`flex flex-col md:flex-row justify-between gap-8 p-6 max-w-6xl mx-auto `}
      >
        {cart.length === 0 ? (
          <>
            <div className="flex justify-center items-center w-full flex-col gap-4">
              <p className=" text-lg font-medium">Nothing in cart</p>
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
                    <h1 className="text-lg font-semibold">{product.name}</h1>
                    <img
                      src={ratingImages[product.rating.stars]}
                      alt="rating"
                      className="h-5"
                    />
                  </div>

                  {/* Price + Quantity */}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-lg font-bold ">
                      ${(product.priceCents / 100).toFixed(2)}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => addToCart(product, -1)}
                        className="px-3 py-1  roundedtransition"
                      >
                        -
                      </button>
                      <span className="text-lg font-medium">
                        {product.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="px-3 py-1  rounded  transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Cart Summary */}
            <div
              className={`w-full md:w-1/3 h-fit p-6  border rounded-lg shadow-md bg-gray-50 ${
                mode === "light" ? "bg-gray-50" : "bg-gray-900 text-white"
              }`}
            >
              <h2 className="text-xl font-semibold  mb-4">Cart Summary</h2>
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
                  <div className="space-y-2 ">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${(subtotal / 100).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (10%)</span>
                      <span>${(tax / 100).toFixed(2)}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg ">
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
    </div>
  );
};

export default CartStep;
