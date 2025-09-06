import React from "react";

export default function OrderConfirmation() {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-3xl p-8 space-y-8 bg-white shadow-md rounded-2xl">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-green-700">
          Thank You for Your Order!
        </h1>

        {/* Order Info */}
        <div className="flex items-start justify-between pb-4 border-b">
          <div>
            <p className="font-semibold">Order ID: 12323</p>
            <p className="text-sm text-gray-600">Order date: 13/12/2024</p>
          </div>
          <p className="text-sm font-medium text-green-700">
            Estimated Delivery: 23/12/2024
          </p>
        </div>

        {/* Product List */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/100?random=300"
                alt="Jacket"
                className="object-cover w-16 h-16 rounded-lg"
              />
              <div>
                <p className="font-semibold">Jacket</p>
                <p className="text-sm text-gray-600">black | M</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">$150</p>
              <p className="text-sm text-gray-600">Qty: 1</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://picsum.photos/100?random=301"
                alt="T-shirt"
                className="object-cover w-16 h-16 rounded-lg"
              />
              <div>
                <p className="font-semibold">T-shirt</p>
                <p className="text-sm text-gray-600">black | M</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">$120</p>
              <p className="text-sm text-gray-600">Qty: 2</p>
            </div>
          </div>
        </div>

        {/* Payment & Delivery */}
        <div className="grid grid-cols-1 gap-6 pt-6 border-t md:grid-cols-2">
          <div>
            <h3 className="mb-1 font-semibold">Payment</h3>
            <p className="text-gray-700">PayPal</p>
          </div>
          <div>
            <h3 className="mb-1 font-semibold">Delivery</h3>
            <p className="text-gray-700">123 Fashion Street</p>
            <p className="text-gray-700">New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
