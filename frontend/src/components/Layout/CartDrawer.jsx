import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  if (!drawerOpen) return null;

  const handleCheckout = () => {
    toggleCartDrawer(); // close drawer
    navigate("/checkout"); // navigate after drawer closes
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        onClick={toggleCartDrawer}
      ></div>

      {/* Drawer */}
      <div
        className="relative flex flex-col h-full ml-auto bg-white shadow-lg w-80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button
            onClick={toggleCartDrawer}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Cart Content */}
        <CartContents onCheckout={handleCheckout} />
      </div>
    </div>
  );
};

export default CartDrawer;
