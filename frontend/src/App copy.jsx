import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage.jsx";
import FilterSideBar from "./components/Products/FilterSideBar.jsx";
import ProductDetails from "./components/Products/ProductDetails.jsx";
import Checkout from "./components/Cart/checkout.jsx";
import Confirmation from "./components/Cart/OrderConfirmation.jsx";
import AdminPage from "./components/Admin/adminPage.jsx";
import UserManagement from "./components/Admin/userManagement.jsx";
import AdminLayout from "./components/Admin/adminLayout.jsx";
import OrderManagement from "./components/Admin/orderManagement.jsx";
import ProductsManagement from "./components/Admin/productsManagement.jsx";

export const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
        const { data } = await axios.get(url, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        setUser(data.user);
      } catch (err) {
        console.log("Authentication error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />

        {/* Protected User Routes */}
        <Route path="/" element={<UserLayout user={user} />}>
          <Route
            index
            element={user ? <Home user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/collections/:collection"
            element={
              user ? <CollectionPage user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="products/:id"
            element={
              user ? <ProductDetails user={user} /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/checkout"
            element={user ? <Checkout user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/OrderConfirmation"
            element={
              user ? <Confirmation user={user} /> : <Navigate to="/login" />
            }
          />
        </Route>

        {/* Admin Routes - Add proper admin role check if needed */}
        <Route
          path="/admin/*"
          element={
            user ? <AdminLayout user={user} /> : <Navigate to="/login" />
          }
        >
          <Route index element={<AdminPage />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="products" element={<ProductsManagement />} />
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
