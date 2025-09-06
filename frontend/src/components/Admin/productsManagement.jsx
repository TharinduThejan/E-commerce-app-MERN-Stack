import React, { useState } from "react";
import AdminSidebar from "./adminSidebar";

export default function ProductsManagement() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Printed Resort Shirt",
      price: "$29.99",
      sku: "PRNT-RES-004",
    },
    { id: 2, name: "Chino Pants", price: "$55", sku: "BW-005" },
    { id: 3, name: "Cargo Pants", price: "$50", sku: "BW-008" },
    {
      id: 4,
      name: "Long-Sleeve Thermal Tee",
      price: "$27.99",
      sku: "LST-THR-009",
    },
    { id: 5, name: "Pleated Midi Skirt", price: "$55", sku: "BW-W-004" },
    { id: 6, name: "Graphic Print Tee", price: "$30", sku: "TW-W-006" },
    { id: 7, name: "Ribbed Long-Sleeve Top", price: "$55", sku: "TW-W-007" },
    {
      id: 8,
      name: "Slim-Fit Stretch Shirt",
      price: "$29.99",
      sku: "SLIM-SH-002",
    },
    { id: 9, name: "Cargo Joggers", price: "$45", sku: "BW-002" },
    { id: 10, name: "Off-Shoulder Top", price: "$45", sku: "TW-W-004" },
  ]);

  const handleEdit = (id) => {
    alert(`Edit product with id: ${id}`);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="p-8">
          <h1 className="mb-6 text-2xl font-bold">Product Management</h1>
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="text-left text-gray-700 bg-gray-100">
                  <th className="px-6 py-3 font-semibold">Name</th>
                  <th className="px-6 py-3 font-semibold">Price</th>
                  <th className="px-6 py-3 font-semibold">SKU</th>
                  <th className="px-6 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr
                    key={product.id}
                    className={`border-t ${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-3">{product.name}</td>
                    <td className="px-6 py-3">{product.price}</td>
                    <td className="px-6 py-3">{product.sku}</td>
                    <td className="flex px-6 py-3 space-x-2">
                      <button
                        onClick={() => handleEdit(product.id)}
                        className="px-4 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="px-4 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Delete
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
