import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import ListProduct from "./pages/ListProduct/ListProduct";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="detail" element={<DetailProduct />} />
        <Route path="list_product" element={<ListProduct />} />
      </Route>
    </Routes>
  );
}
