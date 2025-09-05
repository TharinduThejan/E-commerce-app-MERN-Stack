import React from "react";
import { FiLock, FiRefreshCcw, FiShoppingBag } from "react-icons/fi";

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto text-center sm:grid-cols-3">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <FiShoppingBag className="mb-4 text-xl" />
          <h3 className="text-sm font-semibold">FREE INTERNATIONAL SHIPPING</h3>
          <p className="text-sm text-gray-600">On all orders over $100.00</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <FiRefreshCcw className="mb-4 text-xl" />
          <h3 className="text-sm font-semibold">45 DAYS RETURN</h3>
          <p className="text-sm text-gray-600">Money back guarantee</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <FiLock className="mb-4 text-xl" />
          <h3 className="text-sm font-semibold">SECURE CHECKOUT</h3>
          <p className="text-sm text-gray-600">100% secured checkout process</p>
        </div>
      </div>
    </section>
  );
}
