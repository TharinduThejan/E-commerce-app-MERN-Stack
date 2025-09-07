import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Get all users
export const getUsers = async (token) => {
  const res = await axios.get(`${API_URL}/api/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Create a new user
export const createUser = async (userData, token) => {
  const res = await axios.post(`${API_URL}/api/users`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Update user
export const updateUser = async (id, updateData, token) => {
  const res = await axios.put(`${API_URL}/api/users/${id}`, updateData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Delete user
export const deleteUser = async (id, token) => {
  const res = await axios.delete(`${API_URL}/api/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
// Get current logged-in user (for Navbar role check)
export const getCurrentUser = async (token) => {
  const res = await axios.get(`${API_URL}/api/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data; // includes role
};
