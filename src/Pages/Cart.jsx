import React from "react";
import { useState } from "react";
import CartStep from "../Components/CartStep";
import ShippingStep from "../Components/ShippingStep";
import PaymentStep from "../Components/PaymentStep";
import OrderReview from "../Components/OrderReview";
const Cart = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingDate, setShippingDate] = useState();
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const onNextStep = (data) => {
    if (data?.shippingDate) setShippingDate(data.shippingDate);
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
      {currentStep === 3 && (
        <PaymentStep
          onBackStep={onBackStep}
          shippingDate={shippingDate}
          onNextStep={() => onNextStep({ paymentMethod })} // use onNextStep, not handleNext
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      )}

      {currentStep === 4 && (
        <OrderReview
          shippingMethod={shippingMethod}
          shippingDate={shippingDate}
          paymentMethod={paymentMethod}
          onBack={onBackStep} // use your existing back function
          onPlaceOrder={() => {
            // Example: finalize order here
            console.log("Order placed!", {
              shippingMethod,
              shippingDate,
              paymentMethod,
            });
            alert("Order placed successfully!");
            // Optionally, reset the cart/steps
            setCurrentStep(1);
          }}
        />
      )}
    </div>
  );
};

export default Cart;
