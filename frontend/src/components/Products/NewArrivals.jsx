import React, { useRef } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import photo1 from "../../assets/p6.jpeg";
import photo2 from "../../assets/p2.jpeg";
import photo3 from "../../assets/p3.webp";
import photo4 from "../../assets/p4.webp";
import photo5 from "../../assets/p5.jpg";
import photo6 from "../../assets/p1.jpeg";

const NewArrivals = () => {
  const scrollRef = useRef(null);

  const newArrivals = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: [
        {
          image: photo1,
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      id: 2,
      name: "Product 2",
      price: 120,
      image: [
        {
          image: photo2,
          altText: "Trendy Outfit",
        },
      ],
    },
    {
      id: 3,
      name: "Product 3",
      price: 140,
      image: [
        {
          image: photo3,
          altText: "Casual Wear",
        },
      ],
    },
    {
      id: 4,
      name: "Product 4",
      price: 90,
      image: [
        {
          image: photo4,
          altText: "Classic Look",
        },
      ],
    },
    {
      id: 5,
      name: "Product 5",
      price: 110,
      image: [
        {
          image: photo5,
          altText: "Street Style",
        },
      ],
    },
    {
      id: 6,
      name: "Product 6",
      price: 130,
      image: [
        {
          image: photo6,
          altText: "Smart Outfit",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-6 mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
            New Arrivals
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover the latest drops in fashion and accessories. Fresh picks,
            every week.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex px-2 py-4 space-x-6 overflow-x-scroll scrollbar-hide scroll-smooth "
          >
            {newArrivals.map((product) => (
              <div
                key={product.id}
                className="group min-w-[250px] sm:min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-500 hover:cursor-pointer hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image[0].image}
                    alt={product.image[0].altText || product.name}
                    className="object-cover w-full h-64 transition-transform duration-500 transform group-hover:scale-110"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 text-center">
                  <Link to={`/product/${product.id}`}>
                    <h4 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-indigo-600 hover:cursor-pointer">
                      {product.name}
                    </h4>
                  </Link>
                  <p className="mt-2 text-gray-600">LKR{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 flex items-center justify-between w-full px-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 transition bg-white rounded-full shadow-md hover:bg-gray-100 hover:scale-105"
            >
              <FiChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 transition bg-white rounded-full shadow-md hover:bg-gray-100 hover:scale-105"
            >
              <FiChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
