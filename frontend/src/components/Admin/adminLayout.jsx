import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
const AdminLayout = () => {
  return (
    <>
      {/*main content*/}
      <main className="min-h-screen m-5">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
