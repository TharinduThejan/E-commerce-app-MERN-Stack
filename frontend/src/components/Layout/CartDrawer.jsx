import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/*close button*/}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      {/* Cart Content */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="mb-4 text-xl font-semibold">Your Cart</h2>
        <CartContents />
      </div>
      {/* {Checkout Botton} */}
      <div className="bottom-0 p-4 bg-white sticky">
        <button className="w-full py-3 font-semibold text-white bg-black rounded-lg hover:bg-gray-800">
          Checkout
        </button>
        <p className="mt-2 text-sm tracking-tighter text-center text-gray-500 ">
          Shipping,taxes and discount codes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
