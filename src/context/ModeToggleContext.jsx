import { createContext, useState } from "react";

export const ModeToggleContext = createContext();

export const ModeToggleProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  localStorage.setItem("mode", mode);
  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ModeToggleContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeToggleContext.Provider>
  );
};
