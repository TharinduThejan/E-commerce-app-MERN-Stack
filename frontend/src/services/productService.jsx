import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

// Get all products
export const getProducts = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Add new product with image
export const createProduct = async (product, token) => {
  const formData = new FormData();
  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("description", product.description || "");
  formData.append("category", product.category || "General");
  formData.append("stock", product.stock || 0);

  if (product.image) {
    formData.append("image", product.image);
  }

  const res = await axios.post(API_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Update product
export const updateProduct = async (id, product, token) => {
  const formData = new FormData();
  if (product.name) formData.append("name", product.name);
  if (product.price) formData.append("price", product.price);
  if (product.description) formData.append("description", product.description);
  if (product.category) formData.append("category", product.category);
  if (product.stock) formData.append("stock", product.stock);
  if (product.image) formData.append("image", product.image);

  const res = await axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
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
