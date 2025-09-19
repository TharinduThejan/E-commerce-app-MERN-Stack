import React from "react";
import photo from "../../assets/featured.jpg";
import { Link } from "react-router-dom";
export default function FeaturedCollection() {
  return (
    <section className="flex flex-col items-center justify-between overflow-hidden md:flex-row bg-green-50 rounded-2xl">
      {/* Left Side Content */}
      <div className="w-full p-10 md:w-1/2">
        <h4 className="mb-2 text-gray-600">Comfort and Style</h4>
        <h1 className="mb-4 text-4xl font-bold">
          Apparel made for your everyday life
        </h1>
        <p className="mb-6 text-gray-700">
          Discover high-quality, comfortable clothing that effortlessly blends
          fashion and function. Designed to make you look and feel great every
          day.
        </p>
        <Link
          to="collections/collection"
          className="px-6 py-3 text-white transition bg-black rounded-md hover:bg-gray-800"
        >
          Shop Now
        </Link>
      </div>

      {/* Right Side Image */}
      <div className="w-full md:w-1/2">
        <img
          src={photo}
          alt="Yoga Group"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
