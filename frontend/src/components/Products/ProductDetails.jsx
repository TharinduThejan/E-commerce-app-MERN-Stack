import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Sample Product",
  price: "$99.99",
  originalPrice: "$149.99",
  description:
    "This is a sample product description.This is a sample product description.This is a sample product description.",
  brand: "Sample Brand",
  material: "Cotton",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/400?random=14",
      alt: "Sample Product Image",
    },
    {
      url: "https://picsum.photos/400?random=15",
      alt: "Sample Product Image2",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Similar Product 1",
    price: "$89.99",
    images: [
      {
        url: "https://picsum.photos/400?random=16",
        alt: "Similar Product Image 1",
      },
    ],
  },
  {
    _id: 2,
    name: "Similar Product 2",
    price: "$79.99",
    images: [
      {
        url: "https://picsum.photos/400?random=17",
        alt: "Similar Product Image 2",
      },
    ],
  },
  {
    _id: 3,
    name: "Similar Product 3",
    price: "$69.99",
    images: [
      {
        url: "https://picsum.photos/400?random=18",
        alt: "Similar Product Image 3",
      },
    ],
  },
  {
    _id: 4,
    name: "Similar Product 4",
    price: "$59.99",
    images: [
      {
        url: "https://picsum.photos/400?random=19",
        alt: "Similar Product Image 4",
      },
    ],
  },
  {
    _id: 5,
    name: "Similar Product 5",
    price: "$49.99",
    images: [
      {
        url: "https://picsum.photos/400?random=20",
        alt: "Similar Product Image 5",
      },
    ],
  },
  {
    _id: 6,
    name: "Similar Product 6",
    price: "$39.99",
    images: [
      {
        url: "https://picsum.photos/400?random=21",
        alt: "Similar Product Image 6",
      },
    ],
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);
  };

  return (
    <div className="p-6">
      <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 justify-self-center">
        Best Seller
      </h3>
      <div className="max-w-6xl p-8 mx-auto bg-white rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/*left thumbanils*/}
          <div className="flex-col hidden mr-6 space-y-4 md:flex">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Thumbnail ${index}`}
                className={`object-cover w-20 h-20 border rounded-lg cursor-pointer ${
                  image.url === mainImage ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/*main image*/}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <div className="overflow-hidden rounded-lg">
              <img
                src={mainImage}
                alt={selectedProduct.images[0].alt || "Main Product Image"}
                className="object-cover w-full h-auto rounded-lg"
              />
            </div>
          </div>
          {/*mobile thumbnails*/}
          <div className="flex flex-row mt-4 space-x-4 md:hidden overscroll-x-scroll">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || `Thumbnail ${index}`}
                className={`object-cover w-20 h-20 border rounded-lg cursor-pointer ${
                  image.url === mainImage ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/*right side*/}
          <div className="mt-6 md:mt-0 md:ml-10 md:w-1/2">
            <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
              {selectedProduct.name}
            </h1>
            <p className="mb-4 text-lg text-gray-600 line-through">
              {selectedProduct.originalPrice &&
                `${selectedProduct.originalPrice}`}
            </p>
            <p className="mb-2 text-xl text-gray-500">
              {selectedProduct.price}
            </p>
            <p className="mb-4 text-gray-600">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="mb-1 font-medium text-gray-700">Color:</p>
              <div className="flex space-x-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 transition-transform border rounded-full hover:scale-105 ${
                      color === selectedColor
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="mb-1 font-medium text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 text-sm font-medium text-gray-700 transition-transform border rounded hover:scale-105 ${
                      size === selectedSize ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 ">Quantity:</p>
              <div className="flex items-center mt-2 space-x-4">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  className="px-2 py-1 text-lg bg-gray-200 rounded"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 text-lg bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`w-full px-4 py-3 text-white bg-black rounded-lg hover:bg-gray-700 ${
                isButtonDisabled
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700 ">
              <h3 className="mb-4 text-xl font-bold">Characteristics</h3>
              <table className="w-full text-sm text-left text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium border-t">Brand</td>
                    <td className="py-2 border-t">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium border-t">Materials</td>
                    <td className="py-2 border-t">
                      {selectedProduct.material}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20"></div>
        <h2 className="mb-4 text-2xl font-medium text-center">
          You may also like
        </h2>
        <ProductGrid products={similarProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;
