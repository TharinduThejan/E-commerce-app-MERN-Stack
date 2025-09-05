import { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from an API or use static data
    setTimeout(() => {
      setOrders([
        {
          _id: "1",
          createdAt: new Date(),
          shippingAddress: {
            street: "123 Main St",
            city: "Anytown",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 1",
              quantity: 2,
              image: "https://picsum.photos/200?random=1",
            },
          ],
          totalPrice: 59.99,
          isPaid: true,
        },
        {
          _id: "2",
          createdAt: new Date(),
          shippingAddress: {
            street: "123 Main St",
            city: "Anytown",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 2",
              quantity: 5,
              image: "https://picsum.photos/200?random=6",
            },
          ],
          totalPrice: 199.96,
          isPaid: true,
        },
        {
          _id: "3",
          createdAt: new Date(),
          shippingAddress: {
            street: "123 Main St",
            city: "Anytown",
            country: "USA",
          },
          orderItems: [
            {
              name: "Product 3",
              quantity: 5,
              image: "https://picsum.photos/200?random=7",
            },
          ],
          totalPrice: 199.96,
          isPaid: false,
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="col-span-3 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="mb-4 text-xl font-bold">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 bg-gray-100">
              <th className="p-3">Image</th>
              <th className="p-3">Order ID</th>
              <th className="p-3">Created</th>
              <th className="p-3">Shipping Address</th>
              <th className="p-3">Items</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="border-b cursor-pointer hover:bg-gray-50"
              >
                <td className="px-2 py-2 sm:py-4 sm:px-4">
                  <img
                    src={order.orderItems[0].image}
                    alt={order.orderItems[0].name}
                    className="object-cover w-12 h-12 rounded-lg"
                  />
                </td>
                <td className="p-3">#{order._id}</td>
                <td className="p-3">{order.createdAt.toLocaleString()}</td>
                <td className="p-3">
                  {order.shippingAddress.city}, {order.shippingAddress.country}
                </td>
                <td className="p-3">{order.orderItems[0].quantity}</td>
                <td className="p-3">${order.totalPrice.toFixed(2)}</td>
                <td
                  className={`p-3 font-semibold ${
                    order.isPaid ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.isPaid ? "Paid" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrdersPage;
