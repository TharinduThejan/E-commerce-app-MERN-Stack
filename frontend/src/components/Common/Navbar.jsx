import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  return (
    <>
      <nav className="container flex items-center justify-between px-4 py-6 mx-auto">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Logo
          </Link>
        </div>
        {/* Center-navigation Links */}
        <div className="hidden space-x-6 md:flex">
          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Men
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Women
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Bottom Wear
          </Link>
        </div>
        {/* Right-icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="w-6 h-6 text-gray-700" />
          </Link>
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 bg-primary text-white  text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>
          {/*Search Icon*/}
          <div className="overflow-hidden">
            <SearchBar />
            <button className="md:hidden">
              <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer />
    </>
  );
};

export default Navbar;
