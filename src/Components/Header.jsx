import React, { useState, useContext } from "react";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CardContext";
import { ModeToggleContext } from "../context/ModeToggleContext";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { mode, toggleMode } = useContext(ModeToggleContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={` flex  lg:justify-around justify-between items-center p-6  sticky top-0 z-50  ${
        mode === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold italic text-sm md:text-md">
          BN
        </div>
        <span className="text-2xl md:text-3xl text-blue-500 font-bold">
          BuyNext
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-7">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              "font-bold " +
              (isActive ? "text-blue-500" : " hover:text-blue-500")
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Right Side: Search + Cart + Hamburger */}
      <div className="flex items-center gap-4">
        {/* Always visible on mobile & desktop */}
        <FaSearch
          className="text-[18px] cursor-pointer"
          onClick={() => navigate("/products")}
        />
        <Link className="flex items-center gap-2" to="/cart">
          <FaShoppingCart className="text-blue-500 text-2xl" />
          <span className="text-[18px]">{cartCount}</span>
        </Link>

        <div
          onClick={toggleMode}
          className={` hidden md:flex w-14 h-7 rounded-2xl px-1  border  items-center cursor-pointer`}
        >
          <span
            className={`w-5 h-5 rounded-full transition-all   duration-200     ${
              mode === "light"
                ? "translate-x-0 bg-blue-500   "
                : " translate-x-6 bg-white "
            } 
     
    `}
          ></span>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex  items-center ">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-[20px]"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div
          className={`fixed inset-0 z-5 flex flex-col gap-8 justify-center items-center transition-transform duration-300 ${
            mode === "light" ? "bg-white" : "bg-gray-900 text-white"
          } `}
        >
          <nav>
            <ul className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    "font-bold text-2xl " +
                    (isActive ? "text-blue-500" : " hover:text-blue-500")
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </nav>

          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-5 right-5 bg-black w-8 h-8 rounded-md text-white text-2xl flex justify-center items-center"
          >
            &times;
          </button>

          <div
            onClick={toggleMode}
            className={` flex w-14 h-6 rounded-2xl   border  items-center cursor-pointer`}
          >
            <span
              className={`w-4 h-4 rounded-full transition-all   duration-200     ${
                mode === "light"
                  ? "translate-x-0 bg-blue-500   "
                  : " translate-x-5 bg-white "
              } 
     
    `}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
