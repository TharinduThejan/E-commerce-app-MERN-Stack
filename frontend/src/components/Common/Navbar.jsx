import React from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

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
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-1 bg-primary text-white  text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>
          {/*Search Icon*/}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          {/* Mobile Navigation Toggle */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4  sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="mb-4 text-xl font-semibold">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
