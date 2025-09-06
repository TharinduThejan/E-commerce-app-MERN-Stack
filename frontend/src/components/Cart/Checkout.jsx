import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      id: 1,
      name: "Classic Oxford Button-Down Shirt",
      size: "M",
      color: "Red",
      price: 39.99,
      quantity: 1,
      img: "https://picsum.photos/400?random=200",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      size: "L",
      color: "Blue",
      price: 49.99,
      quantity: 1,
      img: "https://picsum.photos/400?random=201",
    },
  ],
  totalPrice: 89.98,
};

export default function Checkout() {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  const [checkoutId, setCheckoutId] = useState(null);

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(123);
  };
  const navigateToOrder = () => {
    navigate("/OrderConfirmation");
  };
  return (
    <div className="flex items-start justify-center min-h-screen px-6 py-10 bg-gray-100">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left side - Form */}
        <form
          onSubmit={handleCreateCheckout}
          className="p-8 bg-white shadow-md lg:col-span-2 rounded-2xl"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">CHECKOUT</h2>

            {/* Contact Details */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Contact Details</h3>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full px-3 py-2 bg-gray-100 border rounded-lg"
                disabled
              />
            </div>

            {/* Delivery */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Delivery</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={shippingAddress.firstname}
                  className="w-full px-3 py-2 border rounded-lg"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      firstname: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={shippingAddress.lastname}
                  className="w-full px-3 py-2 border rounded-lg"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      lastname: e.target.value,
                    })
                  }
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                value={shippingAddress.address}
                className="w-full px-3 py-2 mb-4 border rounded-lg"
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  })
                }
              />

              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="City"
                  value={shippingAddress.city}
                  className="w-full px-3 py-2 border rounded-lg"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      city: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  value={shippingAddress.postalCode}
                  className="w-full px-3 py-2 border rounded-lg"
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      postalCode: e.target.value,
                    })
                  }
                />
              </div>

              <input
                type="text"
                placeholder="Country"
                value={shippingAddress.country}
                className="w-full px-3 py-2 mb-4 border rounded-lg"
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Phone"
                value={shippingAddress.phone}
                className="w-full px-3 py-2 mb-6 border rounded-lg"
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
              />

              <div className="mt-6">
                {!checkoutId ? (
                  <button className="w-full py-3 font-semibold text-white bg-black rounded-lg hover:bg-gray-800">
                    Continue to Payment
                  </button>
                ) : (
                  <div className="flex justify-center">
                    <button
                      onClick={navigateToOrder}
                      className="px-6 py-2 font-semibold bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500"
                    >
                      Pay with PayPal
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>

        {/* Right side - Order Summary */}
        <div className="p-6 space-y-6 bg-white shadow-md rounded-2xl h-fit">
          <h3 className="text-xl font-semibold">Order Summary</h3>

          {/* Products */}
          {cart.products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 pb-4 border-b"
            >
              <img
                src={product.img}
                alt={product.name}
                className="object-cover w-20 h-20 rounded-lg"
              />
              <div className="flex-1">
                <p className="font-semibold">{product.name}</p>
                <p className="text-sm text-gray-600">Size: {product.size}</p>
                <p className="text-sm text-gray-600">Color: {product.color}</p>
              </div>
              <p className="font-semibold">€{product.price.toFixed(2)}</p>
            </div>
          ))}

          {/* Pricing */}
          <div className="pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>€{cart.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-medium text-green-600">FREE</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>€{cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
