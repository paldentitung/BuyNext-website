import React, { useState } from "react";

const PaymentStep = ({
  paymentMethod,
  setPaymentMethod,
  onBackStep,
  shippingDate,
  onNextStep,
}) => {
  const [showCardForm, setShowCardForm] = useState(paymentMethod === "credit");
  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    setShowCardForm(method === "credit");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="w-full mx-auto flex flex-col max-w-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-600 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Secure Payment</h2>
            <p className="text-gray-600">
              Estimated delivery: {shippingDate || "within 5-7 days"}
            </p>
          </div>
        </div>

        {/* Payment Methods Card */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Select Payment Method
          </h3>

          <div className="space-y-2">
            {/* Credit/Debit Card */}
            <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="credit"
                checked={paymentMethod === "credit"}
                onChange={(e) => handlePaymentChange(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <div className="flex-1">
                <span className="font-medium text-gray-900">
                  Credit / Debit Card
                </span>
                <p className="text-sm text-gray-600">
                  Visa, Mastercard • Secure
                </p>
              </div>
            </label>

            {/* PayPal */}
            <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={(e) => handlePaymentChange(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <div className="flex-1">
                <span className="font-medium text-gray-900">PayPal</span>
                <p className="text-sm text-gray-600">
                  Pay securely with PayPal
                </p>
              </div>
            </label>
          </div>

          {/* Card Form - Conditional */}
          {showCardForm && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-md font-semibold text-gray-700 mb-3">
                Card Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="CVV"
                    maxLength={3}
                    className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Security Badge */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
          <p className="text-sm text-green-800">
            Protected with 256-bit SSL encryption
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <button
            onClick={onBackStep}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
          >
            ← Back to Shipping
          </button>
          <button
            onClick={onNextStep}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Complete Payment →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
