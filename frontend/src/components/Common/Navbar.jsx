import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { getCurrentUser } from "../../services/userService";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const toggleCartDrawer = () => setDrawerOpen(!drawerOpen);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const data = await getCurrentUser(token);
        setUser(data); // data should include role
      } catch (err) {
        console.log("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);

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
            to="/"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/collections/:collection"
            className="text-sm font-medium text-gray-700 uppercase hover:text-black"
          >
            Collections
          </Link>

          {/* Admin link - only visible if role is admin */}
          {localStorage.getItem("token") ? (
            <>
              {user?.role == "admin" && (
                <Link
                  to="/admin"
                  className="text-sm font-medium text-gray-700 uppercase hover:text-black"
                >
                  Admin
                </Link>
              )}
            </>
          ) : null}
        </div>

        {/* Right-icons: Show only if logged in by OIDC or email/password (token exists) */}
        <div className="flex items-center space-x-4">
          {localStorage.getItem("token") ? (
            <>
              <Link to="/profile" className="hover:text-black">
                <HiOutlineUser className="w-6 h-6 text-gray-700" />
              </Link>
              <button
                onClick={toggleCartDrawer}
                className="relative hover:text-black"
              >
                <HiOutlineShoppingBag className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-1 bg-primary text-white text-xs rounded-full px-2 py-0.5">
                  4
                </span>
              </button>
            </>
          ) : null}

          <div className="overflow-hidden">
            <SearchBar />
          </div>

          {/* Mobile Navigation Toggle */}
          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
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

            {/* Admin link in mobile drawer */}
            {user?.role === "admin" && (
              <Link
                to="/admin"
                onClick={toggleNavDrawer}
                className="block text-gray-600 hover:text-black"
              >
                Admin
              </Link>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
