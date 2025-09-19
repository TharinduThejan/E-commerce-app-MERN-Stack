import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Products/FilterSideBar";
import { getProducts } from "../services/productService.jsx";
import { Link, useLocation } from "react-router-dom";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const token = localStorage.getItem("token");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const gender = searchParams.get("gender"); // men / women

  // Fetch products
  const fetchProducts = async () => {
    try {
      const data = await getProducts(token);
      setProducts(data);
    } catch (err) {
      console.error(err.message);
      alert("Failed to fetch products");
    }
  };

  // Run fetch on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products when gender or products change
  useEffect(() => {
    if (gender) {
      setFilteredProducts(
        products.filter(
          (product) =>
            product.category &&
            product.category.toLowerCase() === gender.toLowerCase()
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [gender, products]);

  return (
    <div className="flex flex-col gap-6 p-4 md:flex-row md:p-6">
      {/* Mobile filter button */}
      <button className="flex items-center justify-center p-2 border lg:hidden">
        <FaFilter className="m-2" />
      </button>

      {/* Sidebar */}
      <div>
        <FilterSideBar />
      </div>

      {/* Product Collection */}
      <main className="w-full md:w-3/4">
        <h2 className="mb-6 text-xl font-semibold">
          {gender ? `${gender.toUpperCase()} COLLECTION` : "ALL COLLECTION"}
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link key={product._id} to={`/products/${product._id}`}>
                <div className="p-3 transition shadow rounded-2xl hover:shadow-lg">
                  <img
                    src={
                      product.images && product.images[0]
                        ? product.images[0].url
                        : "https://via.placeholder.com/200x200.png?text=No+Image"
                    }
                    alt={product.name}
                    className="object-cover w-full rounded-xl"
                  />
                  <h3 className="mt-3 font-medium">{product.name}</h3>
                  <p className="text-gray-600">LKR{product.price}</p>
                  <p className="text-sm text-gray-500">
                    Category: {product.category || "N/A"}
                  </p>
                  {/* <p className="text-sm text-gray-500">
                    Sizes:{" "}
                    {product.size?.length > 0 ? product.size.join(", ") : "N/A"}
                  </p> */}
                  {/* <p className="text-sm text-gray-500">
                    Colors:{" "}
                    {product.color?.length > 0
                      ? product.color.join(", ")
                      : "N/A"}
                  </p> */}
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default CollectionPage;
