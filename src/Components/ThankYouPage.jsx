import React from "react";
import { Link } from "react-router-dom";
const ThankYouPage = ({ order }) => {
  return (
    <div className="bg-white flex justify-center items-center flex-col pt-10">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Thank You for Your Order!
      </h1>
      <p className="text-gray-700 mb-2">
        Your order has been placed successfully.
      </p>
      {order && (
        <div className="bg-white shadow-md rounded-lg p-4 mt-4 w-full max-w-md">
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
      )}

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
