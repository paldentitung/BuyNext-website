import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white flex justify-around items-center p-6 border-b-gray-300 md:border relative">
        {/* Logo and Hamburger */}
        <div className="flex items-center gap-7">
          <Link to="/" className="text-2xl md:text-3xl text-blue-500 font-bold">
            BuyNext
          </Link>
          <div className="block md:hidden">
            <button onClick={() => setShowMenu(true)}>
              <FaBars />
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  "font-bold " +
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

        <div className=" hidden md:flex items-center gap-5">
          {/* search bar */}
          <FaSearch
            className=" items-center gap-2"
            onClick={() => navigate("/products")}
          />
          {/* Cart */}
          <Link className=" flex items-center gap-2" to="/cart">
            <FaShoppingCart className="text-blue-500 text-2xl" />
            <span className="text-[18px]">0</span>
          </Link>
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

            <div className="flex gap-3 items-center md:hidden ">
              {/* search bar */}
              <FaSearch
                className="text-[18px]"
                onClick={() => {
                  navigate("/products");
                  setShowMenu(false);
                }}
              />

              {/* Cart */}
              <Link
                onClick={() => setShowMenu(false)}
                className=" flex items-center gap-2"
                to="/cart"
              >
                <FaShoppingCart className="text-blue-500 text-2xl" />
                <span className="text-[18px]">0</span>
              </Link>
            </div>

            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-5 right-5 bg-black w-8 h-8 rounded-md text-white text-2xl flex justify-center items-center transition-all duration-200 active:opacity-55"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
