import React from "react";
import { Link } from "react-router-dom";

import rabbitHero from "../../assets/rabbit-hero.webp";

export default function Hero() {
    return (
        <div 
            className="relative text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${rabbitHero})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Discover Amazing Products
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-300">
                        Shop the latest trends in fashion, electronics, and more. 
                        Quality products at unbeatable prices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/products" 
                            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Shop Now
                        </Link>
                        <Link 
                            to="/about" 
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}