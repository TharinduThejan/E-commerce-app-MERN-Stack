import React from "react";
import ProductGrid from "./ProductGrid.jsx";
import placeholderProducts from "./placeholderProducts.jsx";

export default function TopWearsWomen() {
  return (
    <div className="container px-20 mx-auto my-12">
      <h2 className="mb-6 text-2xl font-bold">Similar Products</h2>
      <ProductGrid products={placeholderProducts} />
    </div>
  );
}
