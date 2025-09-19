import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

// Get all products
export const getProducts = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Create product
export const createProduct = async (product, token) => {
  // Send JSON, not FormData, since image is already a URL from Supabase
  const body = {
    name: product.name,
    price: product.price,
    description: product.description || "",
    category: product.category,
    stock: product.stock || 0,
    size: product.size || "",
    color: product.color || "",
    material: product.material || "",
    collection: product.collection || "",
    images: product.image ? [{ url: product.image }] : [],
  };

  const res = await axios.post(API_URL, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

// Update product
export const updateProduct = async (id, product, token) => {
  const body = {};

  if (product.name) body.name = product.name;
  if (product.price) body.price = product.price;
  if (product.description) body.description = product.description;
  if (product.category) body.category = product.category;
  if (product.stock !== undefined) body.stock = product.stock;
  if (product.size) body.size = product.size;
  if (product.color) body.color = product.color;
  if (product.material) body.material = product.material;
  if (product.collection) body.collection = product.collection;
  if (product.image) body.images = [{ url: product.image }];

  const res = await axios.put(`${API_URL}/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
};

// Delete product
export const deleteProduct = async (id, token) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
