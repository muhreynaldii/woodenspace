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
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Wishlist from "./pages/Wishlist/Wishlist";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Seller from "./pages/Seller/Seller";
import DetailProductBuyer from "./pages/DetailProductBuyer/DetailProductBuyer";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<InfoProfil />} />
        <Route path="register" element={<Register />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="/seller" element={<Seller />}>
          <Route index element={<ListProduct />} />
          <Route path="list_product" element={<ListProduct />} />
          <Route path="detail" element={<DetailProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="add_product" element={<InfoProduk />} />
          <Route path="bidding" element={<InfoPenawar />} />
          <Route path="bidding_status" element={<InfoPenawarStatus />} />
        </Route>
        <Route path="/buyer" element={<Buyer />}>
          <Route index element={<DetailProductBuyer />} />
          <Route path="detail" element={<DetailProductBuyer />} />
        </Route>
      </Route>
    </Routes>
  );
}
