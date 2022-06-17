import React from "react";
import { Link } from "react-router-dom";
import LoginRegister from "../../components/LoginRegister/LoginRegister";

function Login() {
  return (
    <LoginRegister name={"Masuk"}>
      <label htmlFor="email" className="mb-1 text-xs">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Contoh : Johndoe@gmail.com"
        className="my-2 block h-[48px] w-[452px] rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
      />
      <label htmlFor="password" className="mb-1 text-xs">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="6+ karakter"
        className="my-2 block h-[48px] w-[452px] rounded-2xl border-2 border-neutral-02 bg-eye bg-right bg-no-repeat bg-origin-content py-3 px-4 placeholder:text-sm"
      />
      <button className="mt-6 mb-10 block h-[48px] w-[452px] rounded-2xl bg-purple-04 py-3 px-6 text-center text-white">
        {" "}
        Masuk
      </button>
      <span className="flex justify-center text-sm">
        Belum Punya Akun?
        <Link to="/register" className="mx-2 text-sm text-purple-04">
          Daftar disini
        </Link>
      </span>
    </LoginRegister>
  );
}

export default Login;
