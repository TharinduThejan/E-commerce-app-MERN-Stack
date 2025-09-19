import React from "react";
import { Link } from "react-router-dom";
import menCollectionImage from "../../assets/mens-collection.webp";
import womenCollectionImage from "../../assets/womens-collection.webp";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600">
            Discover our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/* Men's Collection */}
          <div className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg group hover:shadow-xl">
            <div className="relative h-80">
              <img
                src={menCollectionImage}
                alt="Men's Collection"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="mb-2 text-3xl font-bold">Men's</h3>
                  <p className="mb-4 text-lg">Premium Collection</p>
                  <Link
                    to="/collections/all?gender=men"
                    className="inline-block px-6 py-2 font-semibold text-gray-900 transition-colors bg-white rounded-lg hover:bg-gray-100"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Women's Collection */}
          <div className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-lg group hover:shadow-xl">
            <div className="relative h-80">
              <img
                src={womenCollectionImage}
                alt="Women's Collection"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-all duration-300 bg-black bg-opacity-40 group-hover:bg-opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="mb-2 text-3xl font-bold">Women's</h3>
                  <p className="mb-4 text-lg">Elegant Collection</p>
                  <Link
                    to="/collections/all?gender=women"
                    className="inline-block px-6 py-2 font-semibold text-gray-900 transition-colors bg-white rounded-lg hover:bg-gray-100"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
