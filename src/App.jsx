import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
<<<<<<< HEAD
import InfoProfil from "./pages/InfoProfil/InfoProfil";
=======
import ListProduct from "./pages/ListProduct/ListProduct";
>>>>>>> develop

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="detail" element={<DetailProduct />} />
<<<<<<< HEAD
        <Route path="profil" element={<InfoProfil />} />
=======
        <Route path="list_product" element={<ListProduct />} />
>>>>>>> develop
      </Route>
    </Routes>
  );
}
