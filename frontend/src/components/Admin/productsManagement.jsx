import React, { useEffect, useState } from "react";
import AdminSidebar from "./adminSidebar";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/productService";
import { supabase } from "../../supabaseClient";

export default function ProductsManagement() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    stock: 0,
    size: [],
    color: [],
    material: "",
    collection: "",
    image: null,
  });
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const token = localStorage.getItem("token");

  const fetchProducts = React.useCallback(async () => {
    try {
      const data = await getProducts(token);
      setProducts(data);
    } catch (err) {
      console.error(err.message);
      alert("Failed to fetch products");
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    let arr = form[name] || [];
    if (checked) {
      setForm({ ...form, [name]: [...arr, value] });
    } else {
      setForm({ ...form, [name]: arr.filter((item) => item !== value) });
    }
  };

  const handleAddProduct = async () => {
    if (!form.name || !form.price) {
      alert("Please fill name and price");
      return;
    }

    let imageUrl = "";
    if (form.image) {
      try {
        const fileName = `${Date.now()}-${form.image.name.replace(
          /\s|\(|\)/g,
          "_"
        )}`;
        const { error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(fileName, form.image, {
            cacheControl: "3600",
            upsert: false,
          });
        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("product-images")
          .getPublicUrl(fileName);

        imageUrl = data?.publicUrl || "";
      } catch (err) {
        console.error(err.message);
        alert("Image upload failed");
        return;
      }
    }

    try {
      await createProduct({ ...form, image: imageUrl }, token);

      setForm({
        name: "",
        price: "",
        description: "",
        category: "",
        stock: 0,
        size: [],
        color: [],
        material: "",
        collection: "",
        image: null,
      });

      fetchProducts();
      alert("Product added successfully");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to add product");
    }
  };

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

  const categories = ["Men", "Women", "Kids", "Accessories"];
  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Red", "Blue", "Green", "Black", "White"];
  const materials = ["Cotton", "Polyester", "Wool", "Leather"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      <AdminSidebar />
      <div className="flex-1 p-4 md:p-8">
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
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          {/* Category Radio Buttons */}
          <div>
            <p className="font-semibold">Category:</p>
            {categories.map((cat) => (
              <label key={cat} className="mr-4">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={form.category === cat}
                  onChange={handleChange}
                  className="mr-1"
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Size Checkboxes */}
          <div>
            <p className="font-semibold">Size:</p>
            {sizes.map((s) => (
              <label key={s} className="mr-4">
                <input
                  type="checkbox"
                  name="size"
                  value={s}
                  checked={form.size.includes(s)}
                  onChange={handleCheckboxChange}
                  className="mr-1"
                />
                {s}
              </label>
            ))}
          </div>

          {/* Color Checkboxes */}
          <div>
            <p className="font-semibold">Color:</p>
            {colors.map((c) => (
              <label key={c} className="mr-4">
                <input
                  type="checkbox"
                  name="color"
                  value={c}
                  checked={form.color.includes(c)}
                  onChange={handleCheckboxChange}
                  className="mr-1"
                />
                <span
                  className="inline-block w-6 h-6 mr-1 align-middle border-2 rounded-full"
                  style={{ backgroundColor: c.toLowerCase() }}
                ></span>
                {c}
              </label>
            ))}
          </div>

          {/* Material Radio */}
          <div>
            <p className="font-semibold">Material:</p>
            {materials.map((m) => (
              <label key={m} className="mr-4">
                <input
                  type="radio"
                  name="material"
                  value={m}
                  checked={form.material === m}
                  onChange={handleChange}
                  className="mr-1"
                />
                {m}
              </label>
            ))}
          </div>

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
                <th className="px-6 py-3 font-semibold">Sizes</th>
                <th className="px-6 py-3 font-semibold">Colors</th>
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
                    {product.images && product.images[0]?.url ? (
                      <img
                        src={product.images[0].url}
                        alt={product.name}
                        className="object-cover w-16 h-16 rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="px-6 py-3">{product.name}</td>
                  <td className="px-6 py-3">${product.price}</td>
                  <td className="px-6 py-3">
                    {product.size?.length
                      ? product.size.join(", ")
                      : "No sizes"}
                  </td>
                  <td className="px-6 py-3">
                    {product.color?.length
                      ? product.color.join(", ")
                      : "No colors"}
                  </td>
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
  );
}
