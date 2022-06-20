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
import Buyer from "./pages/Buyer/Buyer";
import InfoPenawarStatus from "./pages/InfoPenawarStatus/InfoPenawarStatus";

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
        <Route path="buyer" element={<Buyer />} />
        <Route path="info_penawar_status" element={<InfoPenawarStatus />} />
      </Route>
    </Routes>
  );
}
