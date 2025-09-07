import React, { useEffect, useState } from "react";
import AdminSidebar from "./adminSidebar";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/userService";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const token = localStorage.getItem("token"); // JWT token from login

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const data = await getUsers(token);
      setUsers(data);
    } catch (err) {
      console.error(err.message);
      alert("Failed to fetch users");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new user
  const handleAddUser = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createUser(form, token);
      setForm({ name: "", email: "", password: "", role: "customer" });
      fetchUsers();
    } catch (err) {
      console.error(err.message);
      alert("Failed to add user");
    }
  };

  // Delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(id, token);
      fetchUsers();
    } catch (err) {
      console.error(err.message);
      alert("Failed to delete user");
    }
  };

  // Update user role
  const handleRoleChange = async (id, newRole) => {
    try {
      await updateUser(id, { role: newRole }, token);
      fetchUsers();
    } catch (err) {
      console.error(err.message);
      alert("Failed to update role");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-4xl p-6 mx-auto">
          <h1 className="mb-6 text-2xl font-bold">User Management</h1>

          {/* Add New User Form */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Add New User</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
              <button
                onClick={handleAddUser}
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
              >
                Add User
              </button>
            </div>
          </div>

          {/* User Table */}
          <div className="overflow-hidden rounded-lg shadow-md bg-gray-50">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-t">
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">
                      <select
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(user._id, e.target.value)
                        }
                        className="p-1 border rounded"
                      >
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
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
