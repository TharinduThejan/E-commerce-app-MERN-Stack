import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const addToCart = async (productId, quantity, token) => {
  const res = await axios.post(
    `${API_URL}/api/cart/add`,
    { productId, quantity },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const getCart = async (token) => {
  const res = await axios.get(`${API_URL}/api/cart`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const removeFromCart = async (productId, token) => {
  const res = await axios.post(
    `${API_URL}/api/cart/remove`,
    { productId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const clearCart = async (token) => {
  const res = await axios.post(
    `${API_URL}/api/cart/clear`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};
