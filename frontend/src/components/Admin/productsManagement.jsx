import React, { useEffect, useState } from "react";
import AdminSidebar from "./adminSidebar";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/productService";

export default function ProductsManagement() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: 0,
    image: null, // file object
  });

  const token = localStorage.getItem("token"); // JWT token

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const data = await getProducts(token);
      setProducts(data);
    } catch (err) {
      console.error(err.message);
      alert("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // Add new product
  const handleAddProduct = async () => {
    if (!form.name || !form.price) {
      alert("Please fill name and price");
      return;
    }
    try {
      await createProduct(form, token);
      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: 0,
        image: null,
      });
      fetchProducts();
    } catch (err) {
      console.error(err.message);
      alert("Failed to add product");
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      await deleteProduct(id, token);
      fetchProducts();
    } catch (err) {
      console.error(err.message);
      alert("Failed to delete product");
    }
  };

  // Edit product
  const handleEdit = async (product) => {
    const newName = prompt("Enter new name:", product.name);
    const newPrice = prompt("Enter new price:", product.price);
    if (!newName || !newPrice) return;

    try {
      await updateProduct(
        product._id,
        { name: newName, price: newPrice },
        token
      );
      fetchProducts();
    } catch (err) {
      console.error(err.message);
      alert("Failed to update product");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      <AdminSidebar />

      <div className="flex-1 p-4 md:p-8">
        <div className="p-8">
          <h1 className="mb-6 text-2xl font-bold">Product Management</h1>

          {/* Add Product Form */}
          <div className="mb-6 space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={form.stock}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={handleAddProduct}
              className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
            >
              Add Product
            </button>
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="text-left text-gray-700 bg-gray-100">
                  <th className="px-6 py-3 font-semibold">Image</th>
                  <th className="px-6 py-3 font-semibold">Name</th>
                  <th className="px-6 py-3 font-semibold">Price</th>
                  <th className="px-6 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr
                    key={product._id}
                    className={`border-t ${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-3">
                      {product.image ? (
                        <img
                          src={`http://localhost:8080/api/products/${product._id}`}
                          alt={product.name}
                          className="object-cover w-16 h-16 rounded"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="px-6 py-3">{product.name}</td>
                    <td className="px-6 py-3">${product.price}</td>
                    <td className="flex px-6 py-3 space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="px-4 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
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
