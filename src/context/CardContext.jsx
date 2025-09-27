import React, { useState, createContext } from "react";
import Products from "../Pages/Products";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (Product, quantity = 1) => {
    setCart((prev) => {
      const existingProductInCart = prev.find((item) => item.id === Product.id);
      let newCart;
      if (existingProductInCart) {
        newCart = prev.map((item) =>
          item.id === Product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newCart = [...prev, { ...Product, quantity }];
      }
      console.log(newCart);

      return newCart;
    });
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
