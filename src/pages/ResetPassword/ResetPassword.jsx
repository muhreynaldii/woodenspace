import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginRegister from "../../components/LoginRegister/LoginRegister";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function ResetPassword() {
  const [newPasswordType, setNewPasswordType] = useState("password");
  const [confNewPasswordType, setConfNewPasswordType] = useState("password");

  const toggleNewPassword = () => {
    if (newPasswordType === "password") {
      setNewPasswordType("text");
      return;
    }
    setNewPasswordType("password");
  };

  const toggleConfNewPassword = () => {
    if (confNewPasswordType === "password") {
      setConfNewPasswordType("text");
      return;
    }
    setConfNewPasswordType("password");
  };

  return (
    <LoginRegister name={"Reset Password"}>
      <label htmlFor="newpassword" className="mb-1 text-xs">
        Password Baru
      </label>
      <div className="relative flex flex-row">
        <input
          type={newPasswordType}
          name="password"
          id="password"
          placeholder="6+ karakter"
          className="my-2 block h-[48px] w-[452px] rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
        />
        <button onClick={toggleNewPassword} className="absolute right-3 top-5">
          {newPasswordType === "password" ? (
            <AiOutlineEyeInvisible className="text-2xl text-neutral-03" />
          ) : (
            <AiOutlineEye className="text-2xl text-neutral-03" />
          )}
        </button>
      </div>
      <label htmlFor="confnewpassword" className="mb-1 text-xs">
        Konfirmasi Password Baru
      </label>
      <div className="relative flex flex-row">
        <input
          type={confNewPasswordType}
          name="password"
          id="password"
          placeholder="6+ karakter"
          className="my-2 block h-[48px] w-[452px] rounded-2xl border-2 border-neutral-02 py-3 px-4 placeholder:text-sm"
        />
        <button
          onClick={toggleConfNewPassword}
          className="absolute right-3 top-5"
        >
          {confNewPasswordType === "password" ? (
            <AiOutlineEyeInvisible className="text-2xl text-neutral-03" />
          ) : (
            <AiOutlineEye className="text-2xl text-neutral-03" />
          )}
        </button>
      </div>
      <button className="mt-6 mb-10 block h-[48px] w-[452px] rounded-2xl bg-purple-04 py-3 px-6 text-center text-white">
        {" "}
        Reset Password
      </button>
      <span className="flex justify-center text-sm">
        Sudah memiliki login dan password?
        <Link to="/login" className="mx-2 text-sm text-purple-04">
          Masuk di sini
        </Link>
      </span>
    </LoginRegister>
  );
}

export default ResetPassword;
