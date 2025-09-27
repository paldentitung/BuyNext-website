import React, { useState, useContext } from "react";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CardContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-white flex  lg:justify-around justify-between items-center p-6 border-b border-gray-300 relative">
      {/* Logo */}
      <Link to="/" className="text-2xl md:text-3xl text-blue-500 font-bold">
        BuyNext
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-7">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              "font-bold " +
              (isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500")
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

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col gap-8 justify-center items-center transition-transform duration-300">
          <nav>
            <ul className="flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    "font-bold text-2xl " +
                    (isActive
                      ? "text-blue-500"
                      : "text-gray-700 hover:text-blue-500")
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
        </div>
      )}
    </div>
  );
};

export default Header;
