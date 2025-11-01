import React, { useContext } from "react";
import { CartContext } from "../context/CardContext";

const OrderReview = ({
  shippingMethod,
  shippingDate,
  paymentMethod,
  onBack,
  onPlaceOrder,
  mode,
}) => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + (item.priceCents / 100) * item.quantity,
    0
  );

  return (
    <div
      className={`min-h-screen  py-8 px-4 ${
        mode === "light" ? "bg-gary-50" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Review Your Order</h2>

        {/* Cart Items */}
        <div className="p-4 rounded-lg shadow space-y-3">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <span className="font-bold">
                ${((item.priceCents / 100) * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Shipping Info */}
        <div className=" p-4 rounded-lg shadow">
          <h3 className="font-semibold">Shipping</h3>
          <p>
            {shippingMethod} • Estimated: {shippingDate}
          </p>
        </div>

        {/* Payment Info */}
        <div className=" p-4 rounded-lg shadow">
          <h3 className="font-semibold">Payment Method</h3>
          <p>{paymentMethod}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button onClick={onBack} className="flex-1 border rounded px-4 py-2">
            ← Back
          </button>
          <button
            onClick={onPlaceOrder}
            className="flex-1 bg-green-600 text-white px-4 py-2 rounded"
          >
            Place Order →
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
