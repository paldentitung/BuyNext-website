// ./Components/ThankYouPage.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ThankYouPage = () => {
  const location = useLocation();
  const order = location.state?.order; // get order from navigate state

  if (!order) {
    return (
      <div className="flex justify-center items-center min-h-screen flex-col">
        <p className="text-gray-700">No order found.</p>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white flex  items-center flex-col pt-10 p-2 min-h-screen">
      <h1 className="text-[20px] md:text-3xl font-bold text-center text-green-600 mb-4">
        🎉 Thank You for Your Order!
      </h1>
      <p className="text-gray-700 mb-2 text-center">
        Your order has been placed successfully.
      </p>

      <div className="bg-white shadow-md rounded-lg flex justify-center items-center flex-col  space-y-4 p-4 mt-4 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        <p>
          <span className="font-medium">Order ID:</span> {order.id}
        </p>
        <p>
          <span className="font-medium">Shipping Method:</span>{" "}
          {order.shippingMethod}
        </p>
        <p>
          <span className="font-medium">Shipping Date:</span>{" "}
          {order.shippingDate}
        </p>
        <p>
          <span className="font-medium">Payment Method:</span>{" "}
          {order.paymentMethod}
        </p>
      </div>

      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
