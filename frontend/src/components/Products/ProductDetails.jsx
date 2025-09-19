// ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { getProducts } from "../../services/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const product = products.find((p) => p._id === id);
        if (!product) {
          // toast.error("Product not found");
          return;
        }
        setSelectedProduct(product);
        if (product.images?.length > 0) setMainImage(product.images[0].url);
      } catch (err) {
        toast.error(`${err.message} - Failed to load product`);
      }
    };
    fetchProduct();
  }, [id]);

  if (!selectedProduct) {
    return <div className="p-6 text-center">Loading product...</div>;
  }

  const handleAddToCart = () => {
    // if (!selectedSize || !selectedColor) {
    //   toast.error("Please select size and color", { duration: 1000 });
    //   return;
    // }

    dispatch(
      addToCart({
        id: selectedProduct._id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity,
        // size: selectedSize,
        // size: selectedSize,
        // color: selectedColor,
        image: mainImage,
      })
    );

    toast.success("Product added to cart", { duration: 1000 });
  };

  return (
    <div className="p-6">
      <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900">
        {selectedProduct.name}
      </h3>

      <div className="max-w-6xl p-8 mx-auto bg-white rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left thumbnails (desktop) */}
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

          {/* Main image */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <div className="overflow-hidden rounded-lg">
              {mainImage && (
                <img
                  src={mainImage}
                  alt={selectedProduct.images[0]?.alt || "Main Product Image"}
                  className="object-cover w-full h-auto rounded-lg"
                />
              )}
            </div>
          </div>

          {/* Mobile thumbnails */}
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

          {/* Right side details */}
          <div className="mt-6 md:mt-0 md:ml-10 md:w-1/2">
            <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
              {selectedProduct.name}
            </h1>
            <p className="mb-2 text-xl text-gray-500">
              LKR {selectedProduct.price}
            </p>
            <p className="mb-4 text-gray-600">{selectedProduct.description}</p>

            {/* Color (single value radio) */}
            {/* <div className="mb-4">
              <p className="mb-1 font-medium text-gray-700">Color:</p>
              <div className="flex space-x-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value={selectedProduct.color}
                    checked={selectedColor === selectedProduct.color}
                    onChange={() => setSelectedColor(selectedProduct.color)}
                    className="hidden"
                  />
                  <span
                    className={`w-8 h-8 border rounded-full`}
                    style={{
                      backgroundColor: selectedProduct.color?.toLowerCase(),
                      borderColor:
                        selectedColor === selectedProduct.color
                          ? "black"
                          : "gray",
                    }}
                  />
                  {selectedProduct.color}
                </label>
              </div>
            </div> */}

            {/* Size (multiple checkboxes) */}
            <div className="mb-4">
              <p className="mb-1 font-medium text-gray-700">Sizes:</p>
              <div className="flex gap-3 mt-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <label
                    key={size}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={size}
                      checked={selectedSize.includes(size)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedSize([...selectedSize, size]);
                        } else {
                          setSelectedSize(
                            selectedSize.filter((s) => s !== size)
                          );
                        }
                      }}
                      className="w-4 h-4 text-black border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center mt-2 space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
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

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full px-4 py-3 text-white bg-black rounded-lg hover:bg-gray-900"
            >
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Similar products */}
        <div className="mt-20">
          <ProductGrid products={[]} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
