import React from "react";
import MyOrdersPage from "./MyOrdersPage.jsx";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.open(`${import.meta.env.VITE_API_URL}/auth/logout`, "_self");
    navigate("/login");
  };

  return (
    <div className="flex justify-center h-screen p-2 space-x-10 bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col items-center h-screen max-h-[300px] col-span-1 p-6 bg-white shadow-md rounded-2xl">
        <h2 className="text-xl font-bold">Admin User</h2>
        <p className="text-gray-500">admin@example.com</p>
        <img
          src="https://picsum.photos/400?random=150"
          alt="Profile"
          className="w-24 h-24 mt-4 rounded-full"
        />
        <button
          onClick={handleLogout}
          className="w-full py-2 mt-6 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Orders */}
      <MyOrdersPage />
    </div>
  );
};

export default Profile;
