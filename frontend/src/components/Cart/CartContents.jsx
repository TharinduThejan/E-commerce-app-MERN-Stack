import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartSlice";

const CartContents = ({ onCheckout }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  if (!cartProducts.length)
    return (
      <div className="flex items-center justify-center flex-1 p-4">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );

  const handleRemove = (id, size, color) => {
    dispatch(removeFromCart({ id, size, color }));
  };

  const handleQuantityChange = (id, size, color, newQty) => {
    if (newQty > 0) {
      const item = cartProducts.find(
        (p) => p.id === id && p.size === size && p.color === color
      );
      if (!item) return;

      if (newQty > item.quantity) {
        dispatch(increaseQuantity({ id, size, color }));
      } else {
        dispatch(decreaseQuantity({ id, size, color }));
      }
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {cartProducts.map((item, index) => (
          <div
            key={`${item.id}-${item.size}-${item.color}-${index}`}
            className="flex items-center p-3 border rounded-lg bg-gray-50"
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-20 h-20 rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {item.size} | Color: {item.color}
              </p>
              <p className="font-medium">LKR {item.price}</p>

              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.size,
                      item.color,
                      item.quantity - 1
                    )
                  }
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item.id,
                      item.size,
                      item.color,
                      item.quantity + 1
                    )
                  }
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => handleRemove(item.id, item.size, item.color)}
              className="px-2 py-1 ml-4 text-sm text-white bg-red-500 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex justify-between mb-3">
          <span className="font-semibold">Total:</span>
          <span className="font-bold">
            LKR{" "}
            {cartProducts
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartContents;
