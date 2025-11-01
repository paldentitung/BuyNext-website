import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CardContext.jsx";
import { ModeToggleProvider } from "./context/ModeToggleContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ModeToggleProvider>
          <App />
        </ModeToggleProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
