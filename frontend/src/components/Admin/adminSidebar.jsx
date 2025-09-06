import React, { useState } from "react";
import {
  FaUsers,
  FaBox,
  FaClipboardList,
  FaStore,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { name: "Admin Dashboard", icon: <FaClipboardList />, path: "/admin" },
    { name: "Users", icon: <FaUsers />, path: "/admin/users" },
    { name: "Products", icon: <FaBox />, path: "/admin/products" },
    { name: "Orders", icon: <FaClipboardList />, path: "/admin/orders" },
    { name: "Shop", icon: <FaStore />, path: "/" },
  ];

  return (
    <div className="flex flex-col w-full text-white bg-gray-900 md:w-64">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-6 text-2xl font-bold">
        Rabbit
        <button className="text-xl md:hidden" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar Items */}
      <nav className={`flex-1 ${isSidebarOpen ? "block" : "hidden"} md:block`}>
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`px-6 py-2 flex items-center space-x-3 cursor-pointer transition-colors ${
                  location.pathname === item.path
                    ? "bg-gray-800 rounded-l-full"
                    : "hover:bg-gray-800"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-6">
        <button className="w-full py-2 bg-red-500 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
