import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <Link key={index} to={`/products/${product._id}`} className="block">
          <div className="p-4 bg-white rounded-lg">
            <div className="w-full h-48 mb-4 overflow-hidden">
              {product.images && product.images[0]?.url ? (
                <img
                  src={product.images[0].url}
                  alt={product.images[0].altText || product.name}
                  className="object-cover w-full h-48 rounded-lg"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100 rounded-lg">
                  No Image
                </div>
              )}
            </div>
          </div>

          <h2 className="px-4 text-lg font-semibold">{product.name}</h2>
          <p className="px-4 text-sm tracking-tighter text-gray-500">
            {product.price}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
