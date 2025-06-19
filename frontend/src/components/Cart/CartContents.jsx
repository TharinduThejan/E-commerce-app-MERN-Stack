import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartContents() {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      color: "Red",
      size: "M",
      price: 20.0,
      quantity: 1,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "jeans",
      color: "Blue",
      size: "L",
      price: 40.0,
      quantity: 1,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-20 h-24 mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-gray-600">
                Color: {product.color} | Size: {product.size}
              </p>
              <div className="flex items-center mt-2">
                <button className="px-2 py-1 text-xl font-medium border rounded">
                  -
                </button>

                <span className="mx-4">{product.quantity}</span>

                <button className="px-2 py-1 text-xl font-medium border rounded">
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin6Line className="w-6 h-6 text-gray-600 hover:text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartContents;
