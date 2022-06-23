import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginRegister from "../../components/LoginRegister/LoginRegister";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

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
        className="my-2 block h-[48px] w-full rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
      />
      <label htmlFor="password" className="mb-1 text-xs">
        Password
      </label>
      <div className="relative flex flex-row">
        <input
          type={passwordType}
          name="password"
          id="password"
          placeholder="6+ karakter"
          className="my-2 block h-[48px] w-full rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
          value={passwordInput}
          onChange={handlePasswordChange}
        />
        <button onClick={togglePassword} className="absolute right-3 top-5">
          {passwordType === "password" ? (
            <AiOutlineEyeInvisible className="text-2xl text-neutral-03" />
          ) : (
            <AiOutlineEye className="text-2xl text-neutral-03" />
          )}
        </button>
      </div>
      <span className="flex justify-end text-sm">
        <Link
          to="/forgot"
          className="mx-2 text-sm text-purple-04 hover:underline"
        >
          Lupa Password?
        </Link>
      </span>
      <button className="mt-6 mb-10 block h-[48px] w-full rounded-2xl bg-purple-04 py-3 px-6 text-center text-white transition hover:bg-purple-03">
        {" "}
        Masuk
      </button>
      <span className="flex justify-center text-sm">
        Belum Punya Akun?
        <Link
          to="/register"
          className="mx-2 text-sm text-purple-04 hover:underline"
        >
          Daftar disini
        </Link>
      </span>
    </LoginRegister>
  );
}

export default Login;
