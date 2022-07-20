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
import ProtectedRoute from "./routes/ProtectedRoutes";
import EditProduct from "./pages/EditProduct/EditProduct";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<InfoProfil />} />
          <Route path="/seller" element={<Seller />}>
            <Route index element={<ListProduct />} />
            <Route path="list_product" element={<ListProduct />} />
            <Route path="detail/:id" element={<DetailProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="add_product" element={<InfoProduk />} />
            <Route path="edit_product/:id" element={<EditProduct />} />
            <Route path="bidding/:id" element={<InfoPenawar />} />
            <Route path="bidding_status" element={<InfoPenawarStatus />} />
          </Route>
          <Route path="/buyer" element={<Buyer />}>
            <Route index element={<DetailProductBuyer />} />
            <Route path="detail/:id" element={<DetailProductBuyer />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
