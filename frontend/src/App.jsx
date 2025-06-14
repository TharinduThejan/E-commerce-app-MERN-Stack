import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*User Layout*/}
        </Route>
        <Route>{/*admin Layout*/}</Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
