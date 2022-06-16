import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import InfoProfil from "./pages/InfoProfil/InfoProfil";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="detail" element={<DetailProduct />} />
        <Route path="profil" element={<InfoProfil />} />
      </Route>
    </Routes>
  );
}

export default App;
