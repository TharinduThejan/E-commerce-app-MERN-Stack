import React, { useState } from "react";
import AdminSidebar from "./adminSidebar";

export default function OrderManagement() {
  const [orders, setOrders] = useState([
    {
      id: "#67540ced3376121b361a0ed0",
      customer: "Admin User",
      totalPrice: "$199.96",
      status: "Processing",
    },
    {
      id: "#67540d3ca67b4a70e434e092",
      customer: "Admin User",
      totalPrice: "$40",
      status: "Processing",
    },
    {
      id: "#675bf2c6ca77bd83eefd7a18",
      customer: "Admin User",
      totalPrice: "$39.99",
      status: "Processing",
    },
    {
      id: "#675c2409b88827304bd5cc1",
      customer: "Admin User",
      totalPrice: "$39.99",
      status: "Processing",
    },
  ]);

  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  const markAsDelivered = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = "Delivered";
    setOrders(updatedOrders);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl p-6 mx-auto">
          <h1 className="mb-6 text-2xl font-bold">Order Management</h1>

          <div className="overflow-hidden rounded-lg shadow-md bg-gray-50">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">ORDER ID</th>
                  <th className="p-3">CUSTOMER</th>
                  <th className="p-3">TOTAL PRICE</th>
                  <th className="p-3">STATUS</th>
                  <th className="p-3">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.customer}</td>
                    <td className="p-3">{order.totalPrice}</td>
                    <td className="p-3">
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(index, e.target.value)
                        }
                        className="p-1 border rounded"
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => markAsDelivered(index)}
                        className="px-3 py-1 text-white bg-green-600 rounded hover:bg-green-700"
                      >
                        Mark as Delivered
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
