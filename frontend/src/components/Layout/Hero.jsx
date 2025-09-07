import React from "react";
import { Link, useNavigate } from "react-router-dom";

import rabbitHero from "../../assets/rabbit-hero.webp";

export default function Hero() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/collections/collection");
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      className="relative text-white bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${rabbitHero})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container relative px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">
            Discover Amazing Products
          </h1>
          <p className="mb-8 text-xl text-gray-300 md:text-2xl">
            Shop the latest trends in fashion, electronics, and more. Quality
            products at unbeatable prices.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={handleClick}
              className="px-8 py-3 font-semibold text-gray-900 transition-colors bg-white rounded-lg hover:bg-gray-100"
            >
              {isLoggedIn ? "Shop Now" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
