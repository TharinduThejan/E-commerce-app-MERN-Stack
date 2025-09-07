import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

// Layouts
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Admin/adminLayout";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage.jsx";
import FilterSideBar from "./components/Products/FilterSideBar.jsx";
import ProductDetails from "./components/Products/ProductDetails.jsx";
import Checkout from "./components/Cart/checkout.jsx";
import Confirmation from "./components/Cart/OrderConfirmation.jsx";

// Admin Pages
import AdminPage from "./components/Admin/adminPage.jsx";
import UserManagement from "./components/Admin/userManagement.jsx";
import OrderManagement from "./components/Admin/orderManagement.jsx";
import ProductsManagement from "./components/Admin/productsManagement.jsx";

const App = () => (
  <BrowserRouter>
    <Toaster position="top-right" />
    <Routes>
      {/* User routes */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="collections/:collection" element={<CollectionPage />} />
        <Route path="filter-sidebar" element={<FilterSideBar />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="order-confirmation" element={<Confirmation />} />
      </Route>

      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminPage />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="orders" element={<OrderManagement />} />
        <Route path="products" element={<ProductsManagement />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
