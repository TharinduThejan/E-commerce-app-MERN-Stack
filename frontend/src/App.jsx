import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

export const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collections/:collection" element={<CollectionPage />} />
          <Route path="/FilterSideBar" element={<FilterSideBar />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/OrderConfirmation" element={<Confirmation />} />
          {/*User Layout*/}
        </Route>
        <Route>{/*admin Layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
