import React from "react";
import AdminSidebar from "./adminSidebar";

const Order = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Content */}
      <div className="flex-1 p-4 bg-black md:p-8"></div>
    </div>
  );
};

export default Order;
