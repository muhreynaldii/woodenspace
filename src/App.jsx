import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import ListProduct from "./pages/ListProduct/ListProduct";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import InfoProfil from "./pages/InfoProfil/InfoProfil";
import InfoProduk from "./pages/InfoProduk/InfoProduk";
import InfoPenawar from "./pages/InfoPenawar/InfoPenawar";
import ModalTawar from "./components/ModalTawar/ModalTawar";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="detail" element={<DetailProduct />} />
        <Route path="list_product" element={<ListProduct />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profil" element={<InfoProfil />} />
        <Route path="produk" element={<InfoProduk />} />
        <Route path="info_penawar" element={<InfoPenawar />} />
        <Route path="modaltawar" element={<ModalTawar />} />
      </Route>
    </Routes>
  );
}
