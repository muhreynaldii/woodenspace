import React from "react";
import LoginRegister from "../../components/LoginRegister/LoginRegister";
import { Link } from "react-router-dom";

function Register() {
  return (
    <LoginRegister name={"Daftar"}>
      <label htmlFor="nama" className="mb-1 text-xs">
        Nama
      </label>
      <input
        type="nama"
        name="nama"
        id="nama"
        placeholder="Nama Lengkap"
        className="my-2 block h-[48px] w-[452px] rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
      />
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
        Daftar
      </button>
      <span className="flex justify-center text-sm">
        Sudah Punya Akun?
        <Link to="/login" className="mx-2 text-sm text-purple-04">
          Masuk di sini
        </Link>
      </span>
    </LoginRegister>
  );
}

export default Register;
