import React from "react";

const OrderedProducts = {
  products: [
    {
      id: 1,
      name: "Classic Oxford Button-Down Shirt",
      size: "M",
      color: "Red",
      price: 39.99,
      quantity: 1,
      img: "https://picsum.photos/400?random=200",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      size: "L",
      color: "Blue",
      price: 49.99,
      quantity: 1,
      img: "https://picsum.photos/400?random=201",
    },
  ],
  totalPrice: 89.98,
};

export default function OrderConfirmation() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-3xl p-8 space-y-8 bg-white shadow-md rounded-2xl">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-green-700">
          Thank You for Your Order!
        </h1>

        {/* Order Info */}
        <div className="flex flex-col items-start justify-between pb-4 border-b md:flex-row md:items-center">
          <div>
            <p className="font-semibold">Order ID: 12323</p>
            <p className="text-sm text-gray-600">Order date: 13/12/2024</p>
          </div>
          <p className="mt-2 text-sm font-medium text-green-700 md:mt-0">
            Estimated Delivery: 23/12/2024
          </p>
        </div>

        {/* Product List */}
        <div className="space-y-4">
          {OrderedProducts.products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-cover w-20 h-20 rounded-lg"
                />
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-600">
                    {product.color} | {product.size}
                  </p>
                  <p className="text-sm text-gray-600">
                    Qty: {product.quantity}
                  </p>
                </div>
              </div>
              <div className="font-semibold text-right">
                ${(product.price * product.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-end pt-4 border-t">
          <p className="text-lg font-bold">
            Total: ${OrderedProducts.totalPrice.toFixed(2)}
          </p>
        </div>

        {/* Payment & Delivery */}
        <div className="grid grid-cols-1 gap-6 pt-6 border-t md:grid-cols-2">
          <div>
            <h3 className="mb-1 font-semibold">Payment Method</h3>
            <p className="text-gray-700">PayPal</p>
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Delivery Address</h3>
            <p className="text-gray-700">123 Fashion Street</p>
            <p className="text-gray-700">New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
