import React from "react";
import { Link } from "react-router-dom";
import LoginRegister from "../../components/LoginRegister/LoginRegister";

function ForgotPassword() {
  return (
    <LoginRegister name={"Lupa Password"}>
      <label htmlFor="email" className="mb-1 text-xs">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Contoh : Johndoe@gmail.com"
        className="my-2 block h-[48px] w-full rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
      />
      <button className="hover:bg- mt-6 mb-10 block h-[48px] w-full rounded-2xl bg-olive-04 py-3 px-6 text-center text-white transition hover:bg-olive-02 hover:text-neutral-04">
        {" "}
        Reset Password
      </button>
      <span className="flex justify-center text-sm">
        Sudah memiliki email dan password?
        <Link
          to="/login"
          className="mx-2 text-sm text-olive-04 hover:underline"
        >
          Masuk di sini
        </Link>
      </span>
    </LoginRegister>
  );
}

export default ForgotPassword;
