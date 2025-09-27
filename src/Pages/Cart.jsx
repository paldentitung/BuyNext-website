import React from "react";
import { useState } from "react";
import CartStep from "../Components/CartStep";
import ShippingStep from "../Components/ShippingStep";
const Cart = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingDate, setShippingDate] = useState();
  const [shippingMethod, setShippingMethod] = useState("standard");

  const onNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const onBackStep = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="bg-white">
      {currentStep === 1 && <CartStep onNextStep={onNextStep} />}
      {currentStep === 2 && (
        <ShippingStep
          onBackStep={onBackStep}
          onNextStep={onNextStep}
          shippingDate={shippingDate}
          setShippingDate={setShippingDate}
          shippingMethod={shippingMethod}
          setShippingMethod={setShippingMethod}
        />
      )}
    </div>
  );
};

export default Cart;
