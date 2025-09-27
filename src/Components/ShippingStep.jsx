import React, { useState, useEffect } from "react";

const ShippingStep = ({
  onNextStep,
  onBackStep,
  shippingDate,
  setShippingDate,
}) => {
  const [shippingMethod, setShippingMethod] = useState("standard");

  const methodDays = {
    standard: "5–7 days",
    express: "2–3 days",
    nextday: "1 day",
  };

  const getEstimatedDate = (method) => {
    const today = new Date();
    let minDays, maxDays;
    if (method === "standard") {
      minDays = 5;
      maxDays = 7;
    } else if (method === "express") {
      minDays = 2;
      maxDays = 3;
    } else {
      minDays = 1;
      maxDays = 1;
    }
    const minDate = new Date(today.getTime() + minDays * 24 * 60 * 60 * 1000);
    const maxDate = new Date(today.getTime() + maxDays * 24 * 60 * 60 * 1000);
    const formatDate = (d) =>
      d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    return `${formatDate(minDate)} – ${formatDate(maxDate)}`;
  };

  useEffect(() => {
    setShippingDate(getEstimatedDate(shippingMethod));
  }, [shippingMethod, setShippingDate]);

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Shipping Details</h2>
          <p className="text-gray-600">Enter your delivery information below</p>
        </div>

        {/* Address Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // prevent full page reload
            onNextStep({ shippingMethod, shippingDate });
          }}
          className="bg-white p-4 rounded-lg shadow space-y-3"
        >
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              placeholder="+1 (555) 123-4567"
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="123 Main St"
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                placeholder="New York"
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                placeholder="NY"
                required
                className="w-full border p-2 rounded"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Postal Code</label>
            <input
              type="text"
              placeholder="10001"
              required
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Country</label>
            <select required className="w-full border p-2 rounded">
              <option value="">Select Country</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Nepal</option>
              <option>Canada</option>
            </select>
          </div>
        </form>

        {/* Shipping Method */}
        <div className="bg-white p-4 rounded-lg shadow space-y-3">
          <h3 className="font-semibold text-gray-700 mb-2">
            Choose Shipping Method
          </h3>
          {[
            { id: "standard", label: "Standard Shipping", cost: "Free" },
            { id: "express", label: "Express Delivery", cost: "$10.00" },
            { id: "nextday", label: "Next-Day Air", cost: "$20.00" },
          ].map((method) => (
            <label
              key={method.id}
              className="flex items-start gap-3 border p-3 rounded cursor-pointer hover:shadow-sm"
            >
              <input
                type="radio"
                name="shipping"
                value={method.id}
                checked={shippingMethod === method.id}
                onChange={(e) => setShippingMethod(e.target.value)}
                className="w-4 h-4 text-blue-600 mt-1"
                required
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{method.label}</span>
                  <span className="font-bold">{method.cost}</span>
                </div>
                <p className="text-sm text-gray-600 ml-1">
                  {methodDays[method.id]} • Estimated:{" "}
                  {getEstimatedDate(method.id)}
                </p>
              </div>
            </label>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onBackStep}
            className="flex-1 border rounded px-4 py-2"
          >
            ← Back
          </button>
          <button
            type="submit"
            onClick={() => onNextStep({ shippingMethod, shippingDate })}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingStep;
